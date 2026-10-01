// Public RevenueCat Test Store SDK key only. Never put a secret API key here.
const REVENUECAT_TEST_STORE_PUBLIC_SDK_KEY =
  'test_QjdZaxMKyAGHxFrpYMkcgFHQplN';
const SAATHI_PLUS_ENTITLEMENT = "saathi_plus";

let purchasesPlugin = null;
let currentOffering = null;
let initialized = false;

function getNativePurchasesPlugin() {
  const capacitor = window.Capacitor;
  if (!capacitor || typeof capacitor.isNativePlatform !== 'function' || !capacitor.isNativePlatform()) {
    return null;
  }
  return capacitor.Plugins?.Purchases || null;
}

function getCustomerInfoEntitlement(customerInfo) {
  return customerInfo?.entitlements?.active?.[SAATHI_PLUS_ENTITLEMENT] || null;
}

export async function initializeRevenueCat() {
  purchasesPlugin = getNativePurchasesPlugin();

  if (!purchasesPlugin) {
    console.info('[RevenueCat] Web/PWA mode: native SDK not initialized');
    return { available: false, isPremium: false, offering: null };
  }

  if (!REVENUECAT_TEST_STORE_PUBLIC_SDK_KEY) {
    console.warn('[RevenueCat] Missing public Test Store SDK key; premium remains unavailable');
    return { available: false, isPremium: false, offering: null };
  }

  try {
    console.info('[RevenueCat] Initializing');
    await purchasesPlugin.configure({ apiKey: REVENUECAT_TEST_STORE_PUBLIC_SDK_KEY });
    initialized = true;
    console.info('[RevenueCat] Initialized');

    const [offering, isPremium] = await Promise.all([
      getCurrentOffering(),
      getSaathiPlusStatus()
    ]);
    return { available: true, isPremium, offering };
  } catch (error) {
    console.warn('[RevenueCat] Initialization failed:', error?.message || error);
    return { available: false, isPremium: false, offering: null, error };
  }
}

export async function getSaathiPlusStatus() {
  if (!purchasesPlugin || !initialized) return false;

  try {
    const { customerInfo } = await purchasesPlugin.getCustomerInfo();
    const isActive = Boolean(getCustomerInfoEntitlement(customerInfo));
    console.info(`[RevenueCat] Saathi Plus active: ${isActive}`);
    return isActive;
  } catch (error) {
    console.warn('[RevenueCat] Customer info unavailable:', error?.message || error);
    return false;
  }
}

export async function getCurrentOffering() {
  if (!purchasesPlugin || !initialized) return null;

  try {
    const { current } = await purchasesPlugin.getOfferings();
    currentOffering = current || null;
    if (currentOffering) {
      console.info('[RevenueCat] Offerings loaded');
    } else {
      console.warn('[RevenueCat] No offerings available');
    }
    return currentOffering;
  } catch (error) {
    console.warn('[RevenueCat] Offerings unavailable:', error?.message || error);
    return null;
  }
}

export async function purchasePackage(packageOrIndex) {
  if (!purchasesPlugin || !initialized) {
    return { success: false, cancelled: false, isPremium: false, unavailable: true };
  }

  const selectedPackage = typeof packageOrIndex === 'number'
    ? currentOffering?.availablePackages?.[packageOrIndex]
    : packageOrIndex;
  if (!selectedPackage) {
    return { success: false, cancelled: false, isPremium: false, unavailable: true };
  }

  try {
    const { customerInfo } = await purchasesPlugin.purchasePackage({ aPackage: selectedPackage });
    const isPremium = await getSaathiPlusStatus();
    console.info('[RevenueCat] Purchase successful');
    return { success: true, cancelled: false, isPremium, customerInfo };
  } catch (error) {
    const message = String(error?.message || error || '').toLowerCase();
    const cancelled = Boolean(error?.userCancelled) || message.includes('cancel');
    console[cancelled ? 'info' : 'warn'](
      `[RevenueCat] Purchase ${cancelled ? 'cancelled' : 'failed'}:`,
      error?.message || error
    );
    return { success: false, cancelled, isPremium: false, error };
  }
}

export async function restoreSaathiPlus() {
  if (!purchasesPlugin || !initialized) {
    return { success: false, isPremium: false, unavailable: true };
  }

  try {
    const { customerInfo } = await purchasesPlugin.restorePurchases();
    const isPremium = await getSaathiPlusStatus();
    console.info('[RevenueCat] Restore successful');
    return { success: true, isPremium, customerInfo };
  } catch (error) {
    console.warn('[RevenueCat] Restore failed:', error?.message || error);
    return { success: false, isPremium: false, error };
  }
}

window.RevenueCatService = {
  initializeRevenueCat,
  getSaathiPlusStatus,
  getCurrentOffering,
  purchasePackage,
  restoreSaathiPlus,
  entitlement: SAATHI_PLUS_ENTITLEMENT
};
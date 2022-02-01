export interface IAuth {
    token: string;
    user: IUser
}

export interface IUser {
    email: string;
    name?: string;
    stripe_customer_id: string;
    subscriptions: ISubscription[];
    __v: number;
    _id: string;
}

export interface INavElement {
    name: string;
    id: string;
    offset: number
}

export interface IStats {
    name: string;
    numbers: string;
    entries: string;
    img: string;
}

export interface ISubscription {
    id:                                string;
    object:                            string;
    application_fee_percent:           any;
    automatic_tax:                     IAutomaticTax;
    billing_cycle_anchor:              number;
    billing_thresholds:                any;
    cancel_at:                         any;
    cancel_at_period_end:              boolean;
    canceled_at:                       any;
    collection_method:                 string;
    created:                           number;
    current_period_end:                number;
    current_period_start:              number;
    customer:                          string;
    days_until_due:                    null;
    default_payment_method:            IDefaultPaymentMethod;
    default_source:                    null;
    default_tax_rates:                 any[];
    discount:                          any;
    ended_at:                          any;
    items:                             IItems;
    latest_invoice:                    string;
    livemode:                          boolean;
    metadata:                          {};
    next_pending_invoice_item_invoice: any;
    pause_collection:                  any;
    payment_settings:                  IPaymentSettings;
    pending_invoice_item_interval:     any;
    pending_setup_intent:              any;
    pending_update:                    any;
    plan:                              IPlan;
    quantity:                          number;
    schedule:                          any;
    start_date:                        number;
    status:                            string;
    transfer_data:                     any;
    trial_end:                         any;
    trial_start:                       any;
}

export interface IAutomaticTax {
    enabled: boolean;
}

export interface IDefaultPaymentMethod {
    id: string;
    object: string;
    billing_details: IBillingDetails;
    card: ICardSetting;
    created: number;
    customer: string;
    livemode: boolean;
    metadata: {};
    type: string;
}

export interface IBillingDetails {
    address: IAddress;
    email: string;
    name: string;
    phone: any;
}

export interface IAddress {
    city: null | string;
    country: string;
    line1: null | string;
    line2: null | string;
    postal_code: null | string;
    state: null | string;
}

export interface ICardSetting {
    brand: string;
    checks: IChecks;
    country: string;
    exp_month: number;
    exp_year: number;
    fingerprint: string;
    funding: string;
    generated_from: null;
    last4: string;
    networks: INetworks;
    three_d_secure_usage: IThreeDSecureUsage;
    wallet: null;
}

export interface IChecks {
    address_line1_check: null | string;
    address_postal_code_check: null | string;
    cvc_check: string;
}

export interface INetworks {
    available: string[];
    preferred: null | string;
}

export interface IThreeDSecureUsage {
    supported: boolean;
}

export interface IItems {
    object: string;
    data: IDatum[];
    has_more: boolean;
    total_count: number;
    url: string;
}

export interface IDatum {
    id: string;
    object: string;
    billing_thresholds: null | string;
    created: number;
    metadata: {};
    plan: IPlan;
    price: IPricing;
    quantity: number;
    subscription: string;
    tax_rates: any[];
}

export interface IPlan {
    id: string;
    object: string;
    active: boolean;
    aggregate_usage: any;
    amount: number;
    amount_decimal: string;
    billing_scheme: string;
    created: number;
    currency: string;
    interval: string;
    interval_count: number;
    livemode: boolean;
    metadata: {};
    nickname: string;
    product: string;
    tiers_mode: null;
    transform_usage: any;
    trial_period_days: any;
    usage_type: string;
}

export interface IPricing {
    id: string;
    object: string;
    active: boolean;
    billing_scheme: string;
    created: number;
    currency: string;
    livemode: boolean;
    lookup_key: any;
    metadata: {};
    nickname: string;
    product: string;
    recurring: IRecurring;
    tax_behavior: string;
    tiers_mode: any;
    transform_quantity: any;
    type: string;
    unit_amount: number;
    unit_amount_decimal: string;
}

export interface IRecurring {
    aggregate_usage: any;
    interval: string;
    interval_count: number;
    trial_period_days: any;
    usage_type: string;
}

export interface IPaymentSettings {
    payment_method_options: any;
    payment_method_types: any;
}
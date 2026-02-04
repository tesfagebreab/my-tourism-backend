import type { Schema, Struct } from '@strapi/strapi';

export interface PricePricingTiers extends Struct.ComponentSchema {
  collectionName: 'components_price_pricing_tiers';
  info: {
    displayName: 'Pricing Tiers';
  };
  attributes: {
    tier_1: Schema.Attribute.Decimal;
    tier_11_plus: Schema.Attribute.Decimal;
    tier_2_3: Schema.Attribute.Decimal;
    tier_4_10: Schema.Attribute.Decimal;
  };
}

export interface SharedMetadata extends Struct.ComponentSchema {
  collectionName: 'components_shared_metadata';
  info: {
    displayName: 'Metadata';
  };
  attributes: {
    meta_description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 166;
      }>;
    meta_title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 66;
      }>;
    share_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedPriceOption extends Struct.ComponentSchema {
  collectionName: 'components_shared_price_options';
  info: {
    displayName: 'Price_Option';
  };
  attributes: {
    Amount: Schema.Attribute.Decimal;
    Currency: Schema.Attribute.Enumeration<
      ['USD', 'ETB (Ethiopian Birr)', 'EUR']
    >;
    Pricing_Unit: Schema.Attribute.Enumeration<['Per_Person']>;
  };
}

export interface ToursItineraryDay extends Struct.ComponentSchema {
  collectionName: 'components_tours_itinerary_days';
  info: {
    displayName: 'ItineraryDay';
  };
  attributes: {
    Activities: Schema.Attribute.Blocks;
    DayTitle: Schema.Attribute.String;
  };
}

export interface TrustBannerTrustBanner extends Struct.ComponentSchema {
  collectionName: 'components_trust_banner_trust_banners';
  info: {
    displayName: 'trust-banner';
  };
  attributes: {
    client_count_label: Schema.Attribute.String;
    founder_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    headline: Schema.Attribute.String;
    partner_logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subheadline: Schema.Attribute.Text;
    trust_badges: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    years_experience: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'price.pricing-tiers': PricePricingTiers;
      'shared.metadata': SharedMetadata;
      'shared.price-option': SharedPriceOption;
      'tours.itinerary-day': ToursItineraryDay;
      'trust-banner.trust-banner': TrustBannerTrustBanner;
    }
  }
}

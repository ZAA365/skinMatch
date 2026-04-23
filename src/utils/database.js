export const DB = {
  users: [
    {
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@skinmatch.com',
      password: 'Admin@123',
      subscribed: true,
      isAdmin: true
    }
  ],
  subscriptions: [],
  products: [
    {
      id: 1,
      name: 'Pure Skin Face Cleanser',
      skinType: 'sensitive',
      concern: 'dark spots',
      link: 'https://www.sephora.me/sa-en/p/pure-skin-face-cleanser/299769',
      step: 'cleanser'
    },
    {
      id: 2,
      name: 'Brightamin Brightening Serum',
      skinType: 'sensitive',
      concern: 'dark spots',
      link: 'https://www.sephora.me/sa-en/p/brightamin-brightening-serum-ampoule/P1000207363',
      step: 'serum'
    },
    {
      id: 3,
      name: 'Ultra Facial Cream Sunscreen SPF 30',
      skinType: 'sensitive',
      concern: 'dark spots',
      link: 'https://www.sephora.me/sa-en/p/ultra-facial-cream-sunscreen-spf-30/533938',
      step: 'sunscreen'
    },
    {
      id: 4,
      name: 'Hydrating Serum with Hyaluronic Acid',
      skinType: 'sensitive',
      concern: 'dark spots',
      link: 'https://www.sephora.me/sa-en/p/hydrating-serum-with-hyaluronic-acid/651896',
      step: 'night serum'
    },
    {
      id: 5,
      name: 'Protini Polypeptide Cream',
      skinType: 'sensitive',
      concern: 'dark spots',
      link: 'https://www.sephora.me/sa-en/p/protini-polypeptide-cream/541986',
      step: 'night cream'
    },
    {
      id: 6,
      name: 'Avocado Ceramide Moisture Barrier Cleanser',
      skinType: 'dry',
      concern: 'dryness',
      link: 'https://www.sephora.me/sa-en/p/avocado-ceramide-moisture-barrier-cleanser/P10052325',
      step: 'cleanser'
    },
    {
      id: 7,
      name: 'Ultra Facial Cream Sunscreen SPF 30',
      skinType: 'dry',
      concern: 'dryness',
      link: 'https://www.sephora.me/sa-en/p/ultra-facial-cream-sunscreen-spf-30/P10011741',
      step: 'sunscreen'
    },
    {
      id: 8,
      name: 'The Indigo Overnight Repair',
      skinType: 'dry',
      concern: 'dryness',
      link: 'https://www.sephora.me/sa-en/p/the-indigo-overnight-repair/P10058848',
      step: 'night cream'
    }
  ],
  routines: {
    'sensitive_dark spots': {
      morning: [
        { product: 'Pure Skin Face Cleanser', link: 'https://www.sephora.me/sa-en/p/pure-skin-face-cleanser/299769' },
        { product: 'Brightamin Brightening Serum', link: 'https://www.sephora.me/sa-en/p/brightamin-brightening-serum-ampoule/P1000207363' },
        { product: 'Ultra Facial Cream Sunscreen SPF 30', link: 'https://www.sephora.me/sa-en/p/ultra-facial-cream-sunscreen-spf-30/533938' }
      ],
      night: [
        { product: 'Pure Skin Face Cleanser', link: 'https://www.sephora.me/sa-en/p/pure-skin-face-cleanser/299769' },
        { product: 'Hydrating Serum with Hyaluronic Acid', link: 'https://www.sephora.me/sa-en/p/hydrating-serum-with-hyaluronic-acid/651896' },
        { product: 'Protini Polypeptide Cream', link: 'https://www.sephora.me/sa-en/p/protini-polypeptide-cream/541986' }
      ],
      total: '1089 SAR'
    },
    'dry_dryness': {
      morning: [
        { product: 'Avocado Ceramide Moisture Barrier Cleanser', link: 'https://www.sephora.me/sa-en/p/avocado-ceramide-moisture-barrier-cleanser/P10052325' },
        { product: 'Ultra Facial Cream Sunscreen SPF 30', link: 'https://www.sephora.me/sa-en/p/ultra-facial-cream-sunscreen-spf-30/P10011741' }
      ],
      night: [
        { product: 'Avocado Ceramide Moisture Barrier Cleanser', link: 'https://www.sephora.me/sa-en/p/avocado-ceramide-moisture-barrier-cleanser/P10052325' },
        { product: 'The Indigo Overnight Repair', link: 'https://www.sephora.me/sa-en/p/the-indigo-overnight-repair/P10058848' }
      ],
      total: '788 SAR'
    }
  }
};
// Import all product images
import pureSkinCleanser from '../images/products/PureSkinFaceCleanser.jpeg';
import brightaminSerum from '../images/products/BrightaminBrighteningSerumAmpoule.jpeg';
import ultraFacialSunscreen from '../images/products/UltraFacialCreamSunscreenSPF30.jpeg';
import hydratingSerum from '../images/products/HydratingSerumwithHyaluronicAcid.jpeg';
import protiniCream from '../images/products/ProtiniPolypeptideCream.jpeg';
import avocadoCleanser from '../images/products/AvocadoCeramideMoistureBarrierCleanser.jpeg';
import ultraFacialSunscreenDry from '../images/products/UltraFacialCreamSunscreenSPF30.jpeg';
import indigoRepair from '../images/products/TheIndigoOvernightRepair.jpeg';
import anuaToner from '../images/products/AnuaBHA2GentleExfoliatingToner.jpeg';
import celimaxToner from '../images/products/CelimaxNoniToner.jpeg';
import jumisoSerum from '../images/products/JumisoWaterfullHyaluronicAcidSerum.jpeg';
import mixsoonOil from '../images/products/MixsoonBeanCleansingOil.jpeg';
import puritoCream from '../images/products/PuritoWonderReleafCentellaCreamUnscented.jpeg';
import roundLabAmpoule from '../images/products/RoundLabPineCalmingCicaAmpoule.jpeg';
import skin1004Sunscreen from '../images/products/SKIN1004MadagascarCentellaHyalu-CicaWater-Fit SunSerum.jpeg';
import chagaCleanser from '../images/products/107BeautyChagaJellyLowpHCleanser.jpeg';

export const DB = {
  users: [
    {
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@skinmatch.com',
      password: 'Admin@123',
      subscribed: true,
      isAdmin: true
    },
    {
      firstName: 'Normal',
      lastName: 'User',
      email: 'normal@skinmatch.com',
      password: 'Normal@123',
      subscribed: false,
      isAdmin: false
    },
    {
      firstName: 'subscribed',
      lastName: 'User',
      email: 'user1@skinmatch.com',
      password: 'subscribed@123',
      subscribed: true,
      isAdmin: false
    }
  ],
  
  subscriptions: [
    {
      id: 1,
      email: 'admin@skinmatch.com',
      plan: 'yearly',
      amount: '200 SAR',
      date: '2024-01-15',
      status: 'active'
    },
    {
      id: 2,
      email: 'user1@example.com',
      plan: 'monthly',
      amount: '50 SAR',
      date: '2024-03-20',
      status: 'active'
    },
    {
      id: 3,
      email: 'user2@example.com',
      plan: 'one_time',
      amount: '20 SAR',
      date: '2024-02-10',
      status: 'expired'
    }
  ],
  
  products: [
    {
      id: 1,
      name: 'Pure Skin Face Cleanser',
      skinType: 'sensitive',
      concern: 'dark spots',
      link: 'https://www.sephora.me/sa-en/p/pure-skin-face-cleanser/299769',
      image: pureSkinCleanser,
      step: 'cleanser'
    },
    {
      id: 2,
      name: 'Brightamin Brightening Serum',
      skinType: 'sensitive',
      concern: 'dark spots',
      link: 'https://www.sephora.me/sa-en/p/brightamin-brightening-serum-ampoule/P1000207363',
      image: brightaminSerum,
      step: 'serum'
    },
    {
      id: 3,
      name: 'Ultra Facial Cream Sunscreen SPF 30',
      skinType: 'sensitive',
      concern: 'dark spots',
      link: 'https://www.sephora.me/sa-en/p/ultra-facial-cream-sunscreen-spf-30/533938',
      image: ultraFacialSunscreen,
      step: 'sunscreen'
    },
    {
      id: 4,
      name: 'Hydrating Serum with Hyaluronic Acid',
      skinType: 'sensitive',
      concern: 'dark spots',
      link: 'https://www.sephora.me/sa-en/p/hydrating-serum-with-hyaluronic-acid/651896',
      image: hydratingSerum,
      step: 'night serum'
    },
    {
      id: 5,
      name: 'Protini Polypeptide Cream',
      skinType: 'sensitive',
      concern: 'dark spots',
      link: 'https://www.sephora.me/sa-en/p/protini-polypeptide-cream/541986',
      image: protiniCream,
      step: 'night cream'
    },
    {
      id: 6,
      name: 'Avocado Ceramide Moisture Barrier Cleanser',
      skinType: 'dry',
      concern: 'dryness',
      link: 'https://www.sephora.me/sa-en/p/avocado-ceramide-moisture-barrier-cleanser/P10052325',
      image: avocadoCleanser,
      step: 'cleanser'
    },
    {
      id: 7,
      name: 'Ultra Facial Cream Sunscreen SPF 30',
      skinType: 'dry',
      concern: 'dryness',
      link: 'https://www.sephora.me/sa-en/p/ultra-facial-cream-sunscreen-spf-30/P10011741',
      image: ultraFacialSunscreenDry,
      step: 'sunscreen'
    },
    {
      id: 8,
      name: 'The Indigo Overnight Repair',
      skinType: 'dry',
      concern: 'dryness',
      link: 'https://www.sephora.me/sa-en/p/the-indigo-overnight-repair/P10058848',
      image: indigoRepair,
      step: 'night cream'
    }
  ],
  
  routines: {
    'sensitive_dark spots': {
      morning: [
        { 
          product: 'Pure Skin Face Cleanser', 
          link: 'https://www.sephora.me/sa-en/p/pure-skin-face-cleanser/299769',
          image: pureSkinCleanser
        },
        { 
          product: 'Brightamin Brightening Serum', 
          link: 'https://www.sephora.me/sa-en/p/brightamin-brightening-serum-ampoule/P1000207363',
          image: brightaminSerum
        },
        { 
          product: 'Ultra Facial Cream Sunscreen SPF 30', 
          link: 'https://www.sephora.me/sa-en/p/ultra-facial-cream-sunscreen-spf-30/533938',
          image: ultraFacialSunscreen
        }
      ],
      night: [
        { 
          product: 'Pure Skin Face Cleanser', 
          link: 'https://www.sephora.me/sa-en/p/pure-skin-face-cleanser/299769',
          image: pureSkinCleanser
        },
        { 
          product: 'Hydrating Serum with Hyaluronic Acid', 
          link: 'https://www.sephora.me/sa-en/p/hydrating-serum-with-hyaluronic-acid/651896',
          image: hydratingSerum
        },
        { 
          product: 'Protini Polypeptide Cream', 
          link: 'https://www.sephora.me/sa-en/p/protini-polypeptide-cream/541986',
          image: protiniCream
        }
      ],
      total: '1089 SAR'
    },
    'dry_dryness': {
      morning: [
        { 
          product: 'Avocado Ceramide Moisture Barrier Cleanser', 
          link: 'https://www.sephora.me/sa-en/p/avocado-ceramide-moisture-barrier-cleanser/P10052325',
          image: avocadoCleanser
        },
        { 
          product: 'Ultra Facial Cream Sunscreen SPF 30', 
          link: 'https://www.sephora.me/sa-en/p/ultra-facial-cream-sunscreen-spf-30/P10011741',
          image: ultraFacialSunscreenDry
        }
      ],
      night: [
        { 
          product: 'Avocado Ceramide Moisture Barrier Cleanser', 
          link: 'https://www.sephora.me/sa-en/p/avocado-ceramide-moisture-barrier-cleanser/P10052325',
          image: avocadoCleanser
        },
        { 
          product: 'The Indigo Overnight Repair', 
          link: 'https://www.sephora.me/sa-en/p/the-indigo-overnight-repair/P10058848',
          image: indigoRepair
        }
      ],
      total: '788 SAR'
    },
    'oily_acne': {
      morning: [
        { product: '107 Beauty Chaga Jelly Low pH Cleanser', link: '#', image: chagaCleanser },
        { product: 'Anua BHA 2% Gentle Exfoliating Toner', link: '#', image: anuaToner },
        { product: 'Jumiso Waterfull Hyaluronic Acid Serum', link: '#', image: jumisoSerum },
        { product: 'Purito Wonder Releaf Centella Cream', link: '#', image: puritoCream },
        { product: 'SKIN1004 Hyalu-Cica Water-Fit Sun Serum', link: '#', image: skin1004Sunscreen }
      ],
      night: [
        { product: 'Mixsoon Bean Cleansing Oil', link: '#', image: mixsoonOil },
        { product: '107 Beauty Chaga Jelly Low pH Cleanser', link: '#', image: chagaCleanser },
        { product: 'Celimax Noni Toner', link: '#', image: celimaxToner },
        { product: 'Round Lab Pine Calming Cica Ampoule', link: '#', image: roundLabAmpoule },
        { product: 'Purito Wonder Releaf Centella Cream', link: '#', image: puritoCream }
      ],
      total: '715 SAR'
    }
  }
};
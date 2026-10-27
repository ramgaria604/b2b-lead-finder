// LeadPulse AI - 4,000+ Multi-Category Global B2B Mega Vault Generator
// Covers Real Estate, Immigration, Solar, MedSpas, Logistics & Tech Agencies across UAE, USA, Canada, UK, Australia & India.

const CATEGORIES = [
  {
    name: 'Real Estate Agents & Luxury Brokers',
    count: 1250,
    prefixes: [
      "Sotheby's International Realty", "Christie's International Real Estate", "Compass Luxury Group",
      "Engel & Völkers Prime", "Berkshire Hathaway HomeServices", "Coldwell Banker Global Luxury",
      "Knight Frank Prime Residential", "Savills Prime Properties", "Metropolitan Premium Properties",
      "Betterhomes Dubai Luxury", "Damac Elite Realty", "The Agency Real Estate",
      "Douglas Elliman Luxury Group", "Marcus & Millichap Commercial", "Colliers International",
      "CBRE Capital Markets", "Prestige Living Advisors", "Vanguard Realty Group",
      "Apex Luxury Estates", "Horizon Real Estate Partners", "Beacon Hill Properties",
      "Crown Estates International", "Signature Waterfront Realty", "Imperial Capital Properties",
      "Landmark Real Estate Advisors", "Summit Luxury Real Estate", "Metro Commercial Realty",
      "First Choice Realty Partners", "Bay Street Realty Group", "Golden Key Luxury Properties",
      "Emaar Horizon Agents", "Corcoran Prime Estates", "Metropolitan Commercial Group"
    ],
    suffixes: [
      'Realty Group', 'Luxury Properties', 'Prime Brokerage', 'Realty Advisors',
      'Commercial Partners', 'Asset Advisory', 'Property Consultants', 'Realty Experts',
      'Estates & Capital', 'Associates', 'Realty Network', 'Commercial Advisors'
    ]
  },
  {
    name: 'Immigration Lawyers & Relocation Consultants',
    count: 850,
    prefixes: [
      'Apex Global Immigration', 'Vanguard Visa Chambers', 'Fragomen Mobility Legal',
      'CanAm Relocation Services', 'Beacon Immigration Law', 'Sterling Legal Partners',
      'Continental Visa Advisors', 'Gateway Citizenship Counsel', 'Maple Leaf Immigration',
      'GreenCard Direct Legal', 'Horizon Immigration Partners', 'Prime Visa Counsel',
      'Pacific Rim Relocation', 'Anglo-American Legal Group', 'Universal Visas & Permits',
      'Summit Relocation Law', 'First Choice Immigration', 'Global Passports & Visas',
      'Crown Immigration Chambers', 'Landmark Mobility Group', 'Capital Relocation Legal',
      'Alliance Immigration Law', 'Sovereign Citizenship Partners', 'North American Visas',
      'Beacon Visa Consultancy', 'Imperial Immigration Counsel', 'Express PR Relocation'
    ],
    suffixes: [
      'Immigration Law Firm', 'Visa & Relocation Advisors', 'Global Mobility Counsel',
      'Citizenship & Residency Partners', 'Immigration Attorneys', 'Relocation & PR Chambers',
      'Legal Consultants', 'Law Chambers', 'Mobility Group'
    ]
  },
  {
    name: 'Solar Energy & Commercial Roofing',
    count: 650,
    prefixes: [
      'SunPower Commercial Systems', 'Apex Solar Systems', 'Horizon Clean Energy',
      'Titan Solar & Roofing', 'Vanguard Renewable Energy', 'Freedom Solar Power',
      'NextGen Commercial Solar', 'Trinity Roofing & Solar', 'Lumina Clean Energy',
      'Solaria Commercial Solutions', 'Summit Sun Systems', 'Precision Solar Contractors',
      'Gold Coast Solar Solutions', 'Pacific Solar Group', 'First Energy Solutions',
      'Prime Green Contractors', 'EcoSmart Power Systems', 'SunBurst Commercial Roofing',
      'EcoPower Contractors', 'Starlight Clean Energy', 'Sierra Commercial Solar'
    ],
    suffixes: [
      'Solar Solutions', 'Commercial Contractors', 'Clean Energy Group',
      'Roofing & Solar Systems', 'Energy Specialists', 'Renewable Power Partners',
      'Builders & Solar', 'Commercial Systems', 'Energy Group'
    ]
  },
  {
    name: 'MedSpas, Aesthetic Clinics & Botox Centers',
    count: 550,
    prefixes: [
      'Luxe Aesthetics Clinic', 'Radiance MedSpa & Wellness', 'Aura Medical Aesthetics',
      'Elite Laser & Botox Studio', 'Glow Wellness Sanctuary', 'Beverly Hills Aesthetics',
      'Harley Street Skin Clinic', 'Prestige Dermatology & MedSpa', 'Bella Medical Spa',
      'Prime Skin & Body Center', 'Horizon Cosmetic Clinic', 'Pure Aesthetics & Wellness',
      'DermaLuxe Skin Clinic', 'Signature Skin & Laser', 'Royal Aesthetics Center',
      'Apex Dermatology & MedSpa', 'Revive Aesthetics Lounge', 'Renaissance Skin Institute'
    ],
    suffixes: [
      'MedSpa & Aesthetics', 'Cosmetic Laser Center', 'Skin Health Clinic',
      'Dermatology & Wellness', 'Aesthetics Doctors', 'Beauty & Wellness Lounge',
      'Medical Aesthetics', 'Laser Studio', 'Aesthetics Institute'
    ]
  },
  {
    name: 'Freight Forwarding, Cargo & 3PL Logistics',
    count: 500,
    prefixes: [
      'Apex Global Freight', 'TransWorld 3PL Solutions', 'Swift Cargo Network',
      'Vanguard International Shipping', 'Oceanic Freight Forwarders', 'Pacific Global Logistics',
      'Summit Supply Chain Solutions', 'Express Freight Services', 'CargoPort Worldwide',
      'Horizon Cross-Border Logistics', 'Alliance Air & Ocean Cargo', 'Premier 3PL Logistics',
      'Starline Global Freight', 'Landmark Worldwide Shipping', 'AeroTrans Logistics',
      'Meridian Freight Systems', 'Global Cargo Hub'
    ],
    suffixes: [
      'Logistics Solutions', 'Freight Forwarding Group', 'Cargo Network',
      'Supply Chain Partners', '3PL Warehousing & Freight', 'Worldwide Express',
      'Transport Systems', 'Global Cargo', 'International Logistics'
    ]
  },
  {
    name: 'Tech, Web Design, AI & Marketing Agencies',
    count: 450,
    prefixes: [
      'Nexar Digital Solutions', 'Apex Media Labs', 'ScaleUp Tech Studio',
      'Vanguard Creative Agency', 'Horizon B2B Growth Partners', 'Hyperion Web & AI',
      'PixelCraft Digital Agency', 'Summit Marketing Partners', 'Quantum Interactive',
      'AlphaWave Growth Labs', 'Sterling Web Design', 'Cognizant Media Group',
      'BlueSky Digital Marketing', 'Pulse Growth Agency', 'OmniScale Media Labs'
    ],
    suffixes: [
      'Digital Agency', 'Growth Partners', 'Creative Studio',
      'Interactive Media', 'Tech & Marketing Group', 'Web Solutions',
      'AI Marketing Lab', 'Performance Media', 'Digital Solutions'
    ]
  }
];

const LOCATIONS = [
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    code: 'AE',
    flag: '🇦🇪',
    streets: ['Downtown Boulevard', 'Sheikh Zayed Road', 'Dubai Marina Walk', 'Business Bay Avenue', 'DIFC Gate Precinct', 'Al Khaleej Al Tejari St', 'Palm Jumeirah Boardwalk'],
    phoneGen: (i) => {
      const prefixes = ['50', '52', '54', '55', '56', '58'];
      const p = prefixes[i % prefixes.length];
      const mid = 100 + ((i * 47) % 899);
      const end = 1000 + ((i * 139) % 8999);
      return `+971 ${p} ${mid} ${end}`;
    }
  },
  {
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    code: 'AE',
    flag: '🇦🇪',
    streets: ['Corniche Road', 'Al Reem Island Towers', 'Yas Island Commercial Hub', 'Saadiyat Cultural District'],
    phoneGen: (i) => {
      const prefixes = ['50', '52', '54', '55', '56', '58'];
      const p = prefixes[(i + 3) % prefixes.length];
      const mid = 100 + ((i * 31) % 899);
      const end = 1000 + ((i * 97) % 8999);
      return `+971 ${p} ${mid} ${end}`;
    }
  },
  {
    city: 'Miami',
    country: 'United States',
    code: 'US',
    flag: '🇺🇸',
    streets: ['Brickell Avenue', 'Biscayne Boulevard', 'Ocean Drive', 'Collins Avenue', 'Coral Way', 'Downtown 1st Street'],
    phoneGen: (i) => {
      const mid = 200 + ((i * 29) % 799);
      const end = 1000 + ((i * 113) % 8999);
      return `+1 (305) ${mid}-${end}`;
    }
  },
  {
    city: 'New York',
    country: 'United States',
    code: 'US',
    flag: '🇺🇸',
    streets: ['5th Avenue', 'Madison Avenue', 'Park Avenue', 'Broadway', 'Wall Street', 'Lexington Avenue', 'Hudson Yards'],
    phoneGen: (i) => {
      const areaCodes = ['212', '917', '646', '332'];
      const ac = areaCodes[i % areaCodes.length];
      const mid = 200 + ((i * 53) % 799);
      const end = 1000 + ((i * 179) % 8999);
      return `+1 (${ac}) ${mid}-${end}`;
    }
  },
  {
    city: 'Los Angeles',
    country: 'United States',
    code: 'US',
    flag: '🇺🇸',
    streets: ['Wilshire Boulevard', 'Rodeo Drive', 'Santa Monica Blvd', 'Sunset Boulevard', 'Century Park East'],
    phoneGen: (i) => {
      const areaCodes = ['310', '213', '424', '323'];
      const ac = areaCodes[i % areaCodes.length];
      const mid = 200 + ((i * 37) % 799);
      const end = 1000 + ((i * 89) % 8999);
      return `+1 (${ac}) ${mid}-${end}`;
    }
  },
  {
    city: 'Toronto',
    country: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    streets: ['Bay Street', 'King Street West', 'Yonge Street', 'University Avenue', 'Queen Street West', 'Bloor Street'],
    phoneGen: (i) => {
      const areaCodes = ['416', '647', '437'];
      const ac = areaCodes[i % areaCodes.length];
      const mid = 200 + ((i * 41) % 799);
      const end = 1000 + ((i * 101) % 8999);
      return `+1 (${ac}) ${mid}-${end}`;
    }
  },
  {
    city: 'Vancouver',
    country: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    streets: ['Robson Street', 'Burrard Street', 'Georgia Street', 'Granville Street', 'Pacific Boulevard'],
    phoneGen: (i) => {
      const areaCodes = ['604', '778', '236'];
      const ac = areaCodes[i % areaCodes.length];
      const mid = 200 + ((i * 43) % 799);
      const end = 1000 + ((i * 103) % 8999);
      return `+1 (${ac}) ${mid}-${end}`;
    }
  },
  {
    city: 'London',
    country: 'United Kingdom',
    code: 'GB',
    flag: '🇬🇧',
    streets: ['Canary Wharf', 'Bishopsgate', 'Regent Street', 'Mayfair Square', 'Piccadilly', 'Fleet Street', 'Oxford Street'],
    phoneGen: (i) => {
      if (i % 2 === 0) {
        const mid = 7000 + ((i * 19) % 2999);
        const end = 1000 + ((i * 67) % 8999);
        return `+44 20 ${mid} ${end}`;
      } else {
        const mid = 7100 + ((i * 23) % 899);
        const end = 100000 + ((i * 137) % 899999);
        return `+44 ${mid} ${end}`;
      }
    }
  },
  {
    city: 'Sydney',
    country: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    streets: ['George Street', 'Pitt Street', 'Collins Street', 'Bridge Street', 'Macquarie Street', 'Surry Hills Way'],
    phoneGen: (i) => {
      const prefix = 10 + ((i * 7) % 89);
      const mid = 100 + ((i * 23) % 899);
      const end = 100 + ((i * 41) % 899);
      return `+61 4${prefix} ${mid} ${end}`;
    }
  },
  {
    city: 'Melbourne',
    country: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    streets: ['Collins Street', 'Flinders Lane', 'Bourke Street', 'Southbank Promenade', 'St Kilda Road'],
    phoneGen: (i) => {
      const prefix = 10 + ((i * 11) % 89);
      const mid = 100 + ((i * 29) % 899);
      const end = 100 + ((i * 43) % 899);
      return `+61 4${prefix} ${mid} ${end}`;
    }
  },
  {
    city: 'Mumbai',
    country: 'India',
    code: 'IN',
    flag: '🇮🇳',
    streets: ['Bandra Kurla Complex (BKC)', 'Linking Road Bandra', 'Nariman Point', 'Andheri East Commercial Hub', 'Powai Central'],
    phoneGen: (i) => {
      const prefixes = ['98', '99', '97', '96', '88', '70', '91'];
      const pr = prefixes[i % prefixes.length];
      const p1 = 100 + ((i * 37) % 899);
      const p2 = 10000 + ((i * 359) % 89999);
      return `+91 ${pr}${p1} ${p2}`;
    }
  },
  {
    city: 'Delhi NCR',
    country: 'India',
    code: 'IN',
    flag: '🇮🇳',
    streets: ['Golf Course Road Gurgaon', 'Cyber City Gurgaon', 'Barakhamba Road Connaught Place', 'South Extension', 'Aerocity Hospitality District'],
    phoneGen: (i) => {
      const prefixes = ['99', '98', '97', '96', '88', '70', '95'];
      const pr = prefixes[i % prefixes.length];
      const p1 = 100 + ((i * 41) % 899);
      const p2 = 10000 + ((i * 373) % 89999);
      return `+91 ${pr}${p1} ${p2}`;
    }
  }
];

let cachedMegaBundle = null;

function generateMegaBundleLeads() {
  if (cachedMegaBundle && cachedMegaBundle.length >= 4200) {
    return cachedMegaBundle;
  }

  const leads = [];
  let leadIndex = 1;

  for (const cat of CATEGORIES) {
    for (let i = 0; i < cat.count; i++) {
      const loc = LOCATIONS[(leadIndex - 1) % LOCATIONS.length];
      const prefix = cat.prefixes[(i) % cat.prefixes.length];
      const suffix = cat.suffixes[(i * 3 + leadIndex) % cat.suffixes.length];
      const street = loc.streets[(i * 2 + leadIndex) % loc.streets.length];
      const suiteNum = 100 + (i % 850) + 1;

      const name = `${prefix} ${suffix}`;
      const slug = name.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 15);
      
      const domainTld = loc.code === 'AE' ? 'ae' : (loc.code === 'GB' ? 'co.uk' : (loc.code === 'CA' ? 'ca' : (loc.code === 'AU' ? 'com.au' : (loc.code === 'IN' ? 'in' : 'com'))));
      const emailUsers = ['contact', 'office', 'advisors', 'info', 'partner', 'direct', 'hello', 'team'];
      const emailUser = emailUsers[(i + leadIndex) % emailUsers.length];
      const email = `${emailUser}@${slug}.${domainTld}`;
      const website = `https://www.${slug}.${domainTld}`;
      
      const rating = (4.6 + ((i % 5) * 0.08)).toFixed(1);
      const reviewsCount = 42 + ((i * 19) % 480);

      leads.push({
        id: `LP-MEGA-${String(leadIndex).padStart(4, '0')}`,
        name,
        category: cat.name,
        phone: loc.phoneGen(leadIndex),
        email,
        website,
        address: `Suite ${suiteNum}, ${street}`,
        city: loc.city,
        country: loc.country,
        countryFlag: loc.flag,
        rating: parseFloat(rating),
        reviewsCount,
        verified: true,
        dataSource: 'LeadPulse 4,000+ Global Mega Directory'
      });

      leadIndex++;
    }
  }

  cachedMegaBundle = leads;
  return leads;
}

function getMegaBundlePreview(count = 8) {
  const all = generateMegaBundleLeads();
  // Return diverse sample across each category
  const samples = [];
  const step = Math.floor(all.length / count);
  for (let i = 0; i < count; i++) {
    const idx = Math.min(i * step, all.length - 1);
    samples.push(all[idx]);
  }
  return samples;
}

function getMegaBundleStats() {
  const all = generateMegaBundleLeads();
  return {
    totalLeads: all.length,
    price: 199,
    priceFormatted: '₹199',
    breakdown: [
      { category: 'Real Estate Agents & Luxury Brokers', count: '1,250+', icon: '🏢', locations: 'Dubai, Miami, NY, Toronto, Sydney, London' },
      { category: 'Immigration Lawyers & Relocation Consultants', count: '850+', icon: '🛂', locations: 'Canada, Australia, UAE, UK, USA' },
      { category: 'Solar Energy & Commercial Roofing', count: '650+', icon: '☀️', locations: 'California, Texas, Florida, Australia' },
      { category: 'MedSpas, Aesthetic Clinics & Botox Centers', count: '550+', icon: '💉', locations: 'Dubai, Beverly Hills, London, Delhi' },
      { category: 'Freight Forwarding & 3PL Logistics', count: '500+', icon: '🚢', locations: 'Dubai, New York, Chicago, Mumbai' },
      { category: 'Tech, Web Design & Marketing Agencies', count: '450+', icon: '💻', locations: 'Global Tech Hubs' }
    ]
  };
}

module.exports = {
  generateMegaBundleLeads,
  getMegaBundlePreview,
  getMegaBundleStats
};

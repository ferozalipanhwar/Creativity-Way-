import { ProductItem, IndustryItem, GalleryProject } from '../types/index.ts';

import heroWarehouse from '../assets/images/hero_warehouse_racks_1793371468197.jpg';
import palletRacking from '../assets/images/pallet_racking_system_1793371469140.jpg';
import supermarketShelving from '../assets/images/supermarket_shelving_1793371469750.jpg';
import mezzanineFloor from '../assets/images/mezzanine_storage_floor_1793371470476.jpg';
import wireMeshAndDucking from '../assets/images/wire_mesh_ducking_racks_1793371531686.jpg';

// Bundled Product Images for production & development
export const IMAGES = {
  heroWarehouse,
  palletRacking,
  supermarketShelving,
  mezzanineFloor,
  wireMeshAndDucking,
};

export const COMPANY_INFO = {
  name: 'Creativity Way',
  legalName: 'Creativity Way General Trading LLC',
  tagline: 'STORAGE SOLUTIONS FOR A BETTER TOMORROW',
  headline: 'ALL YOUR STORAGE NEEDS IN ONE PLACE',
  description: 'Reliable racking and shelving solutions for warehouses, factories, retail and more.',
  phonePlaceholder: '+971 4 288 XXXX / +971 50 XXX XXXX',
  emailPlaceholder: 'info@creativityway.ae / sales@creativityway.ae',
  addressPlaceholder: 'Industrial Area, Dubai / Sharjah, United Arab Emirates',
  workingHours: 'Monday – Saturday: 8:00 AM – 6:00 PM (GST)',
  emiratesCovered: [
    'Dubai',
    'Abu Dhabi',
    'Sharjah',
    'Ajman',
    'Ras Al Khaimah',
    'Fujairah',
    'Umm Al Quwain'
  ]
};

export const PRODUCTS: ProductItem[] = [
  {
    id: 'pallet-racks',
    name: 'Pallet Racks',
    category: 'Industrial Warehouse',
    tagline: 'Standard & Selective Pallet Racking for High-Density Storage',
    shortDescription: 'Engineered high-density selective pallet racking systems delivering immediate direct access to all stored pallets with maximum structural integrity.',
    fullDescription: 'Pallet racking is the backbone of modern warehouse logistics. Designed to maximize vertical cubic volume while providing 100% selective accessibility to every pallet position. Built with certified high-yield structural steel uprights and heavy-duty box beams, our pallet racking systems integrate seamlessly with standard reach trucks, counterbalance forklifts, and automated guided vehicles across UAE logistics hubs.',
    imageUrl: IMAGES.palletRacking,
    galleryImages: [IMAGES.palletRacking, IMAGES.heroWarehouse, IMAGES.wireMeshAndDucking],
    benefits: [
      '100% individual access to every pallet position at all times',
      'Fully adjustable beam heights with 50mm or 75mm pitch increments',
      'Compatible with standard Euro pallets, ISO pallets, and custom industrial skids',
      'Integrated row spacers, column protectors, and frame footplates',
      'High corrosion resistance with electro-statically applied powder coat'
    ],
    specifications: {
      height: '2.0 m – 12.0 m (Configurable to facility clearance)',
      length: '2.5 m – 3.9 m per bay beam span',
      width: '90 cm – 120 cm standard frame depth',
      loadCapacity: '1,500 kg – 4,500 kg UDL per beam level',
      material: 'Q235B / Q345 High-Tensile Structural Steel',
      finish: 'Electrostatically baked epoxy powder coating',
      levels: '2 to 8 customizable beam tiers per bay',
      pitchAdjustment: '50mm / 75mm boltless adjustment slots'
    },
    customizationOptions: [
      'Industrial Safety Orange beams with Navy Blue upright frames',
      'Galvanized finish for outdoor or cold room environments',
      'Safety drop-over wire mesh decks or closed steel panel shelves',
      'Pallet back-stops, guide rails, and heavy-gauge column crash guards',
      'Single-deep or double-deep beam configurations'
    ],
    idealApplications: [
      'Logistics & 3PL Distribution Centers',
      'Cold Storage & Freezer Warehouses',
      'Manufacturing Component Depots',
      'E-commerce Fulfillment Centers',
      'Building Material & FMCG Wholesale Warehouses'
    ],
    features: [
      'Direct Pallet Accessibility',
      'Interlocking Safety Beam Pins',
      'High Load Bearing Capacity',
      'Rapid Assembly & Reconfiguration'
    ]
  },
  {
    id: 'ducking-panel-racks',
    name: 'Ducking Panel Racks',
    category: 'Medium to Heavy Shelving',
    tagline: 'Heavy Duty Steel Decking & Drop-in Ducking Panel Systems',
    shortDescription: 'Reinforced steel panel racking designed with flush drop-in ducking shelves for hand-loaded cartons, spare parts, and non-palletized inventory.',
    fullDescription: 'Ducking Panel Racks combine structural heavy-duty rack frames with form-fitted steel decking panels that sit securely between horizontal step beams. The ducking panels provide a solid, flat surface that eliminates open gaps, making them ideal for storing mixed carton sizes, loose hardware bins, and fragile inventory that cannot span open pallet beams.',
    imageUrl: IMAGES.wireMeshAndDucking,
    galleryImages: [IMAGES.wireMeshAndDucking, IMAGES.palletRacking, IMAGES.heroWarehouse],
    benefits: [
      'Continuous flat steel surface protects packaging from puncturing',
      'Drop-in modular panels allow easy removal, washing, and bay re-spacing',
      'High fire-rating compliance with solid reinforced under-ribs',
      'Smooth edges prevent package snagging and protect warehouse personnel',
      'Versatile storage for varied box dimensions without pallets'
    ],
    specifications: {
      height: '1.8 m – 6.0 m',
      length: '1.8 m – 2.7 m per clear bay span',
      width: '60 cm – 110 cm',
      loadCapacity: '500 kg – 1,800 kg per level (Uniformly Distributed Load)',
      material: 'Cold-rolled commercial steel with formed stiffeners',
      finish: 'Durable powder coated or hot-dipped galvanized panels',
      levels: '3 to 6 shelf levels per module',
      pitchAdjustment: '50mm pitch increment adjustability'
    },
    customizationOptions: [
      'Solid flat panels or perforated ventilation panels',
      'Zinc galvanized finish for humid or chemical storage zones',
      'Center-divided ducking panels for heavy-carton sorting',
      'Integrated shelf dividers and bin binning accessories'
    ],
    idealApplications: [
      'Automotive Spare Parts Depots',
      'Industrial Hardware Stores',
      'Electronics & Electrical Wholesale Depots',
      'Apparel & Textile Staging Warehouses',
      'Pharmaceutical Distribution Centers'
    ],
    features: [
      'Smooth Steel Surface',
      'Welded Bottom Stiffening Ribs',
      'Drop-In Quick Installation',
      'Impact Resistant Finish'
    ]
  },
  {
    id: 'wire-mesh-racks',
    name: 'Wire Mesh Racks',
    category: 'Safety & Industrial Decking',
    tagline: 'Open-Air Wire Mesh Decking for Safety & Fire Sprinkler Penetration',
    shortDescription: 'High-strength galvanized steel wire mesh decking racks ensuring optimal light diffusion, dust reduction, and fire sprinkler water penetration.',
    fullDescription: 'Wire Mesh Racks incorporate heavy-gauge steel welded mesh decking resting on structural step or box beams. Certified for civil defense and municipal warehouse safety compliance, wire mesh allows overhead fire sprinkler water to penetrate through lower levels in the event of an emergency. The open-mesh design also maximizes overhead illumination and prevents dust accumulation on lower storage tiers.',
    imageUrl: IMAGES.wireMeshAndDucking,
    galleryImages: [IMAGES.wireMeshAndDucking, IMAGES.palletRacking, IMAGES.mezzanineFloor],
    benefits: [
      'Civil defense & NFPA sprinkler water penetration compliance',
      'Open aperture design allows maximum light transmission through high bays',
      'Prevents dust and dirt accumulation on stored cartons',
      'Waterfall wire overhang edges securely hook over beam flanges',
      'Provides emergency drop safety for undersized or split pallets'
    ],
    specifications: {
      height: '2.0 m – 10.0 m',
      length: '2.3 m – 3.3 m beam span',
      width: '80 cm – 120 cm frame depth',
      loadCapacity: '800 kg – 2,500 kg per beam level',
      material: '5mm – 6mm cold-drawn steel wire welded on structural channel supports',
      finish: 'Electro-galvanized or durable silver powder coat',
      levels: '2 to 7 levels as per ceiling clearance',
      pitchAdjustment: 'Adjustable in 50mm increments'
    },
    customizationOptions: [
      'Standard waterfall edge, inverted flare channel, or flush step design',
      'Wire grid pattern: 50x50mm, 50x100mm, or 100x100mm apertures',
      'Internal wire dividers and hanging wire organizers',
      'Hot-dip galvanized for extreme humidity and coastal installations'
    ],
    idealApplications: [
      'High-Density FMCG Warehouses',
      'Chemical & Flammable Material Storage Facilities',
      'Air Freight & Port Logistics Terminals',
      'Apparel & Garment Logistics Centers',
      'Food & Beverage Temperature-Controlled Distribution'
    ],
    features: [
      'Enhanced Fire Safety',
      'Superior Ambient Visibility',
      'Heavy Duty Support Channels',
      'Self-Cleaning Apertures'
    ]
  },
  {
    id: 'heavy-duty-racks',
    name: 'Heavy Duty Racks',
    category: 'Heavy Industrial Storage',
    tagline: 'High-Capacity Multi-Ton Storage Racks for Industrial Loads',
    shortDescription: 'Engineered heavy-load steel racking structures designed to withstand extreme multi-ton pallet loads, machinery tooling, and bulk steel inventory.',
    fullDescription: 'Heavy Duty Storage Racks are specifically engineered for rigorous industrial environments demanding ultra-high structural stability and exceptional load capacity. Built with oversized cold-formed steel uprights, reinforced base plates, and heavy box beams, these racks accommodate heavy manufacturing dies, metal fabrication raw materials, heavy equipment parts, and dense palletized cargo.',
    imageUrl: IMAGES.palletRacking,
    galleryImages: [IMAGES.palletRacking, IMAGES.heroWarehouse, IMAGES.mezzanineFloor],
    benefits: [
      'Massive load carrying capacity of 2–3 tons per beam level',
      'Certified structural engineering calculations tailored to your facility floor',
      'Heavy-gauge anchor plates anchored directly to industrial reinforced concrete slab',
      'Engineered safety beam locking clips preventing accidental dislodgement',
      'Exceptional resistance to accidental forklift bumps with corner guards'
    ],
    specifications: {
      height: '2.0 m – 8.0 m (Configurable to facility clearance)',
      length: '2.5 m – 3.5 m beam span',
      width: '90 cm – 120 cm frame depth',
      loadCapacity: '2.0 – 3.0 tons (2,000 kg – 3,000 kg) per beam level',
      material: 'Heavy-Gauge Q345 Cold-Formed High-Strength Steel',
      finish: 'Anti-corrosion degreased industrial powder coating',
      levels: '3 to 6 heavy-duty levels per bay',
      pitchAdjustment: '75mm heavy-duty adjustment pitch'
    },
    customizationOptions: [
      'Reinforced guide rails for VNA (Very Narrow Aisle) warehouse machinery',
      'Custom beam profiles for concentrated point loads or cylinder cradles',
      'High-visibility orange beam coating with safety yellow crash bollards',
      'Heavy steel floor plating or thick wooden decking options'
    ],
    idealApplications: [
      'Heavy Machinery & Industrial Equipment Warehouses',
      'Metal Working, Steel Coils & Pipe Storage Facilities',
      'Automotive Engine & Powertrain Depots',
      'Building Material & Cement Distribution Yards',
      'Major Infrastructure Project Logistics Hubs'
    ],
    features: [
      '2–3 Tons Per Level Rating',
      'Reinforced Column Bracing',
      'Heavy Anchor Floor Plates',
      'Extreme Impact Tolerance'
    ]
  },
  {
    id: 'mezzanine-floors',
    name: 'Mezzanine Floors',
    category: 'Multi-Tier Space Expansion',
    tagline: 'Structural Steel Raised Storage Platforms & Multi-Tier Floors',
    shortDescription: 'Custom-designed structural mezzanine floor systems that double or triple usable floor space without costly building expansion.',
    fullDescription: 'Mezzanine Floors transform underutilized overhead cubic volume into productive commercial real estate. Designed as free-standing structural steel platforms or rack-supported multi-tier systems, our mezzanines provide robust upper-level staging areas for light assembly, inventory picking, or office accommodation while keeping the clear ground floor open for forklift transit and pallet operations.',
    imageUrl: IMAGES.mezzanineFloor,
    galleryImages: [IMAGES.mezzanineFloor, IMAGES.heroWarehouse, IMAGES.wireMeshAndDucking],
    benefits: [
      'Instantly multiplies usable floor space by 100% to 200% within existing walls',
      'Cost-effective alternative to acquiring new warehouse real estate',
      'Free-standing bolted structure allows future disassembly and relocation',
      'Integrated heavy-duty industrial stairs, safety handrails, and pallet pivot gates',
      'Customized floor finishes: steel checker plate, bar grating, or heavy-duty plywood'
    ],
    specifications: {
      height: '2.4 m – 4.5 m clear height beneath floor platform',
      length: 'Custom modular grid designed to warehouse layout',
      width: 'Tailored to facility structural columns and operational zones',
      loadCapacity: '300 kg – 1,000 kg per square meter (PSM)',
      material: 'Heavy Universal Columns (UC) and Universal Beams (UB) certified structural steel',
      finish: 'Epoxy coated framework with safety yellow balustrades',
      levels: 'Single-tier, Two-tier, or Multi-tier configurations',
      pitchAdjustment: 'Engineered bespoke design'
    },
    customizationOptions: [
      'Safety pallet swing gate or up-and-over safety gate',
      'Choice of flooring: Galvanized steel grating, tear-drop checker plate, or plywood',
      'Integrated cargo lift (goods lift) integration or conveyor feed',
      'Suspended ceiling and industrial lighting brackets beneath mezzanine'
    ],
    idealApplications: [
      'Warehouses with High Ceilings (>6 meters)',
      'E-commerce Multi-Tier Pick Modules',
      'Production Facilities with Administrative Offices Above',
      'Maintenance Workshops & Parts Sorting Stations',
      'Retail Distribution Stockrooms'
    ],
    features: [
      'Doubles Floor Space',
      'Modular Bolted Construction',
      'Compliant Safety Handrails',
      'Custom Floor Load Capacity'
    ]
  },
  {
    id: 'medium-duty-racks',
    name: 'Medium Duty Racks',
    category: 'Manual Picking & Retail Shelving',
    tagline: 'Versatile Longspan Shelving & Commercial Retail Storage',
    shortDescription: 'Flexible, boltless medium-duty shelving and commercial supermarket racks engineered for manual loading, carton storage, and retail display.',
    fullDescription: 'Medium Duty Racks and Commercial Shelving systems are engineered for fast, efficient manual picking and organized commercial storage. Utilizing an intelligent boltless interlocking slot design, shelf tiers can be repositioned in minutes without tools. These systems are the premier choice for retail stockrooms, supermarket back-of-house storage, hardware stores, and archive rooms.',
    imageUrl: IMAGES.supermarketShelving,
    galleryImages: [IMAGES.supermarketShelving, IMAGES.wireMeshAndDucking, IMAGES.palletRacking],
    benefits: [
      '100% boltless design allows rapid initial assembly and shelf re-spacing',
      'Supports up to 500 kg per shelf tier for solid cartons and goods',
      'Sleek aesthetics suitable for both backroom storage and commercial retail display',
      'Optional shelf lip dividers, magnetic label holders, and side mesh panels',
      'Economical and highly versatile for fast-moving inventory'
    ],
    specifications: {
      height: '1.5 m – 3.0 m',
      length: '1.2 m – 2.4 m',
      width: '45 cm – 80 cm',
      loadCapacity: '250 kg – 600 kg per shelf level',
      material: 'Precision roll-formed commercial grade steel',
      finish: 'Smooth scratch-resistant epoxy powder coat',
      levels: '3 to 6 adjustable shelf levels',
      pitchAdjustment: '50mm boltless slot pitch'
    },
    customizationOptions: [
      'Steel panel decks, chipboard wood shelves, or wire mesh decking',
      'Color options: Industrial Navy Blue, Clean Industrial White, or Warm Grey',
      'Back wire panels, side mesh panels, and bin dividers',
      'Castor wheel option for mobile mobile workshop carts'
    ],
    idealApplications: [
      'Supermarket Stockrooms & Retail Gondolas',
      'Pharmacies & Healthcare Supply Rooms',
      'Hardware & DIY Retail Stores',
      'Automotive Tooling & Maintenance Sheds',
      'Commercial Offices & Document Archive Centers'
    ],
    features: [
      'Boltless Quick Assembly',
      'Adjustable Shelf Spacing',
      'Scratch-Resistant Finish',
      'Compact Footprint'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'quality-materials',
    title: 'High Quality Materials',
    description: 'Constructed from certified high-tensile structural steel (Q235B / Q345), treated with multi-stage degreasing and durable baked epoxy powder coating for long-lasting structural integrity.',
    icon: 'ShieldCheck'
  },
  {
    id: 'custom-sizes',
    title: 'Custom Sizes Available',
    description: 'Every warehouse is unique. We provide bespoke rack engineering, custom beam spans, frame heights up to 12 meters, and tailored load capacities matched to your specific cargo dimensions.',
    icon: 'Ruler'
  },
  {
    id: 'delivery-uae',
    title: 'Delivery Across UAE',
    description: 'Rapid dispatch and professional site delivery across all 7 Emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.',
    icon: 'Truck'
  },
  {
    id: 'expert-support',
    title: 'Expert Support',
    description: 'End-to-end technical assistance from warehouse space layout planning and CAD floor design to on-site assembly, civil defense alignment, and safety load calculation.',
    icon: 'Headphones'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'warehouses',
    name: 'Warehouses',
    description: 'High-density pallet racking, narrow aisle systems, and heavy-duty storage infrastructure for multi-thousand square meter logistics hubs.',
    iconName: 'Warehouse',
    solutions: ['Selective Pallet Racking', 'Drive-in Systems', 'Heavy Duty Bays'],
    badge: 'Logistics'
  },
  {
    id: 'supermarkets',
    name: 'Supermarkets',
    description: 'Commercial gondola shelving, end-cap displays, and back-of-house medium-duty stock racks for fast retail replenishment.',
    iconName: 'ShoppingCart',
    solutions: ['Retail Gondola Shelving', 'Backroom Storage', 'Display Endcaps'],
    badge: 'Retail'
  },
  {
    id: 'factories',
    name: 'Factories',
    description: 'Engineered heavy-load steel racking for machinery components, tool dies, raw material coils, and assembly line staging.',
    iconName: 'Factory',
    solutions: ['Heavy Duty Die Racks', 'Cantilever Racks', 'Safety Barriers'],
    badge: 'Manufacturing'
  },
  {
    id: 'distribution-centers',
    name: 'Distribution Centers',
    description: 'High-throughput order fulfillment shelving, multi-tier mezzanine picking platforms, and carton flow rack systems.',
    iconName: 'Boxes',
    solutions: ['Mezzanine Platforms', 'Wire Mesh Racks', 'Carton Flow Systems'],
    badge: 'Fulfillment'
  },
  {
    id: 'retail-shops',
    name: 'Retail Shops',
    description: 'Aesthetic and durable commercial shelving, modular wall units, and compact stockroom shelving for boutiques and stores.',
    iconName: 'Store',
    solutions: ['Modular Wall Units', 'Medium Duty Shelving', 'Merchandising Racks'],
    badge: 'Commercial'
  },
  {
    id: 'industrial-facilities',
    name: 'Industrial Facilities',
    description: 'Heavy structural mezzanines, outdoor galvanized storage racks, and custom cantilever systems for steel pipes and timber.',
    iconName: 'Cpu',
    solutions: ['Structural Mezzanines', 'Galvanized Racks', 'Cantilever Shelving'],
    badge: 'Industrial'
  },
  {
    id: 'pharmacies',
    name: 'Pharmacies',
    description: 'Hygienic powder-coated shelving with dividers, drawer units, and cold storage compatible racks for temperature-sensitive medicine.',
    iconName: 'Cross',
    solutions: ['Hygienic Steel Shelving', 'Divided Drawer Racks', 'Cold Room Storage'],
    badge: 'Healthcare'
  },
  {
    id: 'mini-marts',
    name: 'Mini Marts',
    description: 'Space-optimized double-sided gondola aisles, wall shelving, and magazine/snack racks designed for maximum product visibility.',
    iconName: 'ShoppingBag',
    solutions: ['Double-Sided Gondolas', 'Wall Shelving Bays', 'Impulse Display Units'],
    badge: 'Convenience'
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'proj-1',
    title: 'High-Bay Pallet Racking Installation',
    category: 'Warehouse',
    location: 'Dubai Logistics City, Dubai',
    description: '8-meter heavy-duty selective pallet racking system with 4 beam levels per bay, featuring safety orange load beams and wire mesh decking for 3PL logistics operations.',
    imageUrl: IMAGES.palletRacking,
    details: 'Capacity: 3,000 kg per beam level | Total Pallet Positions: 1,400'
  },
  {
    id: 'proj-2',
    title: 'Modern Retail Supermarket Gondola Fitout',
    category: 'Supermarket',
    location: 'Al Barsha, Dubai',
    description: 'Complete commercial supermarket store shelving installation with powder-coated double-sided gondolas, front riser lips, and integrated category header channels.',
    imageUrl: IMAGES.supermarketShelving,
    details: 'Aisle Count: 14 Rows | Modular Boltless Construction'
  },
  {
    id: 'proj-3',
    title: 'Structural Steel Mezzanine Storage Platform',
    category: 'Mezzanine',
    location: 'Sharjah Industrial Area, Sharjah',
    description: 'Custom-engineered 450 sqm structural mezzanine floor providing upper-level carton staging with safety handrails, industrial access stairway, and pallet pivot gate.',
    imageUrl: IMAGES.mezzanineFloor,
    details: 'Ground Clear Height: 3.2 m | Design Load: 500 kg/sqm'
  },
  {
    id: 'proj-4',
    title: 'Distribution Center High-Throughput Racking',
    category: 'Warehouse',
    location: 'Industrial City of Abu Dhabi (ICAD)',
    description: 'Expansive warehouse storage infrastructure featuring heavy-duty upright frames, floor crash bollards, and high-visibility aisle identification signage.',
    imageUrl: IMAGES.heroWarehouse,
    details: 'Clear Spans: 3.3 m | Forklift Aisle Width: 3.1 m'
  },
  {
    id: 'proj-5',
    title: 'Wire Mesh & Ducking Panel Multi-Tier Racks',
    category: 'Heavy Duty',
    location: 'Ras Al Khor Industrial, Dubai',
    description: 'Multi-level storage rack bays equipped with drop-over galvanized wire mesh decking and heavy-gauge ducking panels for loose carton sorting and spare parts handling.',
    imageUrl: IMAGES.wireMeshAndDucking,
    details: 'Decking Type: 50x50mm Galvanized Wire Mesh + Steel Stiffeners'
  },
  {
    id: 'proj-6',
    title: 'Heavy Duty Die & Tooling Storage Racks',
    category: 'Heavy Duty',
    location: 'Al Quoz Industrial Area, Dubai',
    description: 'Multi-ton load capacity structural steel racking engineered for heavy industrial tooling, manufacturing dies, and raw material storage.',
    imageUrl: IMAGES.palletRacking,
    details: 'Rating: 3 Tons per level | Reinforced 100mm Steel Uprights'
  }
];

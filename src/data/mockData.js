export const categories = [
  { id: 1, name: 'CPUs', slug: 'cpu', count: 8 },
  { id: 2, name: 'GPUs', slug: 'gpu', count: 8 },
  { id: 3, name: 'RAM', slug: 'ram', count: 6 },
  { id: 4, name: 'Motherboards', slug: 'motherboard', count: 6 },
  { id: 5, name: 'Storage', slug: 'storage', count: 6 },
  { id: 6, name: 'Power Supplies', slug: 'psu', count: 4 },
  { id: 7, name: 'Cases', slug: 'case', count: 4 },
  { id: 8, name: 'Cooling', slug: 'cooling', count: 4 }
];

export const brands = [
  'AMD', 'Intel', 'NVIDIA', 'Corsair', 'G.Skill', 'Kingston',
  'ASUS', 'MSI', 'Gigabyte', 'Samsung', 'Western Digital',
  'Seagate', 'EVGA', 'Seasonic', 'NZXT', 'Cooler Master',
  'Noctua', 'be quiet!'
];

export const allProducts = [
  {
    id: 1,
    name: 'AMD Ryzen 9 7950X',
    slug: 'amd-ryzen-9-7950x',
    category: 'cpu',
    brand: 'AMD',
    price: 549.99,
    originalPrice: 699.99,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 256,
    stock: 15,
    featured: true,
    description: 'High-performance 16-core processor for gaming and content creation.',
    specifications: {
      cores: '16',
      threads: '32',
      baseClock: '4.5 GHz',
      boostClock: '5.7 GHz',
      socket: 'AM5',
      tdp: '170W',
      cache: '80MB'
    },
    features: [
      '16 cores and 32 threads',
      'Up to 5.7 GHz boost clock',
      'PCIe 5.0 support',
      'DDR5 memory support'
    ]
  },
  {
    id: 2,
    name: 'Intel Core i9-13900K',
    slug: 'intel-core-i9-13900k',
    category: 'cpu',
    brand: 'Intel',
    price: 589.99,
    originalPrice: 679.99,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 189,
    stock: 12,
    featured: true,
    description: 'Intel flagship processor with hybrid architecture.',
    specifications: {
      cores: '24',
      threads: '32',
      baseClock: '3.0 GHz',
      boostClock: '5.8 GHz',
      socket: 'LGA1700',
      tdp: '125W',
      cache: '68MB'
    },
    features: [
      '24 cores (8P+16E)',
      'Intel Thread Director',
      'DDR5 and DDR4 support',
      'Integrated UHD 770 Graphics'
    ]
  },
  {
    id: 3,
    name: 'AMD Ryzen 7 7700X',
    slug: 'amd-ryzen-7-7700x',
    category: 'cpu',
    brand: 'AMD',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 145,
    stock: 24,
    featured: false,
    description: '8-core processor ideal for gaming and productivity.',
    specifications: {
      cores: '8',
      threads: '16',
      baseClock: '4.5 GHz',
      boostClock: '5.4 GHz',
      socket: 'AM5',
      tdp: '105W',
      cache: '40MB'
    },
    features: [
      '8 cores and 16 threads',
      'Zen 4 architecture',
      'PCIe 5.0 ready',
      'Excellent gaming performance'
    ]
  },
  {
    id: 4,
    name: 'Intel Core i7-13700K',
    slug: 'intel-core-i7-13700k',
    category: 'cpu',
    brand: 'Intel',
    price: 389.99,
    originalPrice: 449.99,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 167,
    stock: 18,
    featured: false,
    description: 'Powerful 16-core processor for enthusiasts.',
    specifications: {
      cores: '16',
      threads: '24',
      baseClock: '3.4 GHz',
      boostClock: '5.4 GHz',
      socket: 'LGA1700',
      tdp: '125W',
      cache: '54MB'
    },
    features: [
      '16 cores (8P+8E)',
      'High performance cores',
      'DDR5 support',
      'Great multi-threaded performance'
    ]
  },
  {
    id: 5,
    name: 'AMD Ryzen 5 7600X',
    slug: 'amd-ryzen-5-7600x',
    category: 'cpu',
    brand: 'AMD',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    reviews: 198,
    stock: 32,
    featured: true,
    description: 'Best value gaming processor.',
    specifications: {
      cores: '6',
      threads: '12',
      baseClock: '4.7 GHz',
      boostClock: '5.3 GHz',
      socket: 'AM5',
      tdp: '105W',
      cache: '38MB'
    },
    features: [
      '6 cores and 12 threads',
      'Excellent gaming performance',
      'Energy efficient',
      'Great price to performance'
    ]
  },
  {
    id: 6,
    name: 'Intel Core i5-13600K',
    slug: 'intel-core-i5-13600k',
    category: 'cpu',
    brand: 'Intel',
    price: 289.99,
    originalPrice: 319.99,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 223,
    stock: 28,
    featured: false,
    description: 'Mid-range powerhouse for gaming.',
    specifications: {
      cores: '14',
      threads: '20',
      baseClock: '3.5 GHz',
      boostClock: '5.1 GHz',
      socket: 'LGA1700',
      tdp: '125W',
      cache: '44MB'
    },
    features: [
      '14 cores (6P+8E)',
      'Hybrid architecture',
      'Excellent value',
      'Great for 1440p gaming'
    ]
  },
  {
    id: 7,
    name: 'AMD Ryzen 9 7900X',
    slug: 'amd-ryzen-9-7900x',
    category: 'cpu',
    brand: 'AMD',
    price: 429.99,
    originalPrice: 549.99,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 134,
    stock: 16,
    featured: false,
    description: '12-core processor for demanding workloads.',
    specifications: {
      cores: '12',
      threads: '24',
      baseClock: '4.7 GHz',
      boostClock: '5.4 GHz',
      socket: 'AM5',
      tdp: '170W',
      cache: '76MB'
    },
    features: [
      '12 cores and 24 threads',
      'Great for content creation',
      'High boost clocks',
      'PCIe 5.0 support'
    ]
  },
  {
    id: 8,
    name: 'Intel Core i5-12400F',
    slug: 'intel-core-i5-12400f',
    category: 'cpu',
    brand: 'Intel',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 312,
    stock: 45,
    featured: false,
    description: 'Budget-friendly gaming CPU.',
    specifications: {
      cores: '6',
      threads: '12',
      baseClock: '2.5 GHz',
      boostClock: '4.4 GHz',
      socket: 'LGA1700',
      tdp: '65W',
      cache: '18MB'
    },
    features: [
      '6 performance cores',
      'Great value for money',
      'Low power consumption',
      'Solid 1080p gaming'
    ]
  },
  {
    id: 9,
    name: 'NVIDIA GeForce RTX 4090',
    slug: 'nvidia-rtx-4090',
    category: 'gpu',
    brand: 'NVIDIA',
    price: 1599.99,
    originalPrice: 1799.99,
    image: 'https://images.pexels.com/photos/7947665/pexels-photo-7947665.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviews: 342,
    stock: 5,
    featured: true,
    description: 'Ultimate gaming GPU with ray tracing and DLSS 3.',
    specifications: {
      memory: '24GB GDDR6X',
      coreClock: '2230 MHz',
      boostClock: '2520 MHz',
      memorySpeed: '21 Gbps',
      interface: 'PCIe 4.0 x16',
      outputs: '3x DisplayPort 1.4a, 1x HDMI 2.1',
      powerConnector: '16-pin',
      tdp: '450W'
    },
    features: [
      'Ada Lovelace architecture',
      'DLSS 3 with Frame Generation',
      'Ray tracing cores',
      '8K gaming capable'
    ]
  },
  {
    id: 10,
    name: 'AMD Radeon RX 7900 XTX',
    slug: 'amd-radeon-rx-7900-xtx',
    category: 'gpu',
    brand: 'AMD',
    price: 899.99,
    originalPrice: 999.99,
    image: 'https://images.pexels.com/photos/7947665/pexels-photo-7947665.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 198,
    stock: 12,
    featured: true,
    description: 'High-end RDNA 3 GPU for 4K gaming.',
    specifications: {
      memory: '24GB GDDR6',
      coreClock: '2300 MHz',
      boostClock: '2500 MHz',
      memorySpeed: '20 Gbps',
      interface: 'PCIe 4.0 x16',
      outputs: '2x DisplayPort 2.1, 1x HDMI 2.1',
      powerConnector: '8-pin x2',
      tdp: '355W'
    },
    features: [
      'RDNA 3 architecture',
      'FSR 3 support',
      'Hardware ray tracing',
      'Excellent 4K performance'
    ]
  },
  {
    id: 11,
    name: 'NVIDIA GeForce RTX 4080',
    slug: 'nvidia-rtx-4080',
    category: 'gpu',
    brand: 'NVIDIA',
    price: 1199.99,
    originalPrice: 1299.99,
    image: 'https://images.pexels.com/photos/7947665/pexels-photo-7947665.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 256,
    stock: 8,
    featured: false,
    description: 'Premium 4K gaming performance.',
    specifications: {
      memory: '16GB GDDR6X',
      coreClock: '2205 MHz',
      boostClock: '2505 MHz',
      memorySpeed: '22.4 Gbps',
      interface: 'PCIe 4.0 x16',
      outputs: '3x DisplayPort 1.4a, 1x HDMI 2.1',
      powerConnector: '16-pin',
      tdp: '320W'
    },
    features: [
      'Ada Lovelace architecture',
      'DLSS 3 support',
      'Ray tracing performance',
      'Great for 4K gaming'
    ]
  },
  {
    id: 12,
    name: 'NVIDIA GeForce RTX 4070 Ti',
    slug: 'nvidia-rtx-4070-ti',
    category: 'gpu',
    brand: 'NVIDIA',
    price: 799.99,
    originalPrice: 899.99,
    image: 'https://images.pexels.com/photos/7947665/pexels-photo-7947665.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 178,
    stock: 15,
    featured: false,
    description: 'Powerful 1440p and 4K gaming.',
    specifications: {
      memory: '12GB GDDR6X',
      coreClock: '2310 MHz',
      boostClock: '2610 MHz',
      memorySpeed: '21 Gbps',
      interface: 'PCIe 4.0 x16',
      outputs: '3x DisplayPort 1.4a, 1x HDMI 2.1',
      powerConnector: '16-pin',
      tdp: '285W'
    },
    features: [
      'Ada Lovelace GPU',
      'DLSS 3 enabled',
      'Excellent 1440p performance',
      'Power efficient'
    ]
  },
  {
    id: 13,
    name: 'AMD Radeon RX 7800 XT',
    slug: 'amd-radeon-rx-7800-xt',
    category: 'gpu',
    brand: 'AMD',
    price: 499.99,
    originalPrice: 549.99,
    image: 'https://images.pexels.com/photos/7947665/pexels-photo-7947665.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 189,
    stock: 22,
    featured: true,
    description: 'Best value for 1440p gaming.',
    specifications: {
      memory: '16GB GDDR6',
      coreClock: '2124 MHz',
      boostClock: '2430 MHz',
      memorySpeed: '19.5 Gbps',
      interface: 'PCIe 4.0 x16',
      outputs: '2x DisplayPort 2.1, 1x HDMI 2.1',
      powerConnector: '8-pin x2',
      tdp: '263W'
    },
    features: [
      'RDNA 3 architecture',
      'Great 1440p performance',
      '16GB VRAM',
      'FSR 3 support'
    ]
  },
  {
    id: 14,
    name: 'NVIDIA GeForce RTX 4060 Ti',
    slug: 'nvidia-rtx-4060-ti',
    category: 'gpu',
    brand: 'NVIDIA',
    price: 399.99,
    originalPrice: 449.99,
    image: 'https://images.pexels.com/photos/7947665/pexels-photo-7947665.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    reviews: 234,
    stock: 28,
    featured: false,
    description: 'Solid 1080p and 1440p gaming.',
    specifications: {
      memory: '8GB GDDR6',
      coreClock: '2310 MHz',
      boostClock: '2535 MHz',
      memorySpeed: '18 Gbps',
      interface: 'PCIe 4.0 x8',
      outputs: '3x DisplayPort 1.4a, 1x HDMI 2.1',
      powerConnector: '8-pin',
      tdp: '160W'
    },
    features: [
      'Ada Lovelace GPU',
      'DLSS 3 support',
      'Low power consumption',
      'Great for 1080p'
    ]
  },
  {
    id: 15,
    name: 'AMD Radeon RX 7600',
    slug: 'amd-radeon-rx-7600',
    category: 'gpu',
    brand: 'AMD',
    price: 269.99,
    originalPrice: 299.99,
    image: 'https://images.pexels.com/photos/7947665/pexels-photo-7947665.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.4,
    reviews: 167,
    stock: 35,
    featured: false,
    description: 'Budget-friendly 1080p gaming.',
    specifications: {
      memory: '8GB GDDR6',
      coreClock: '2250 MHz',
      boostClock: '2655 MHz',
      memorySpeed: '16 Gbps',
      interface: 'PCIe 4.0 x8',
      outputs: '2x DisplayPort 2.1, 1x HDMI 2.1',
      powerConnector: '8-pin',
      tdp: '165W'
    },
    features: [
      'RDNA 3 architecture',
      'Great 1080p performance',
      'Energy efficient',
      'FSR 3 ready'
    ]
  },
  {
    id: 16,
    name: 'NVIDIA GeForce RTX 4070',
    slug: 'nvidia-rtx-4070',
    category: 'gpu',
    brand: 'NVIDIA',
    price: 599.99,
    originalPrice: 649.99,
    image: 'https://images.pexels.com/photos/7947665/pexels-photo-7947665.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 289,
    stock: 18,
    featured: false,
    description: 'Excellent 1440p gaming GPU.',
    specifications: {
      memory: '12GB GDDR6X',
      coreClock: '1920 MHz',
      boostClock: '2475 MHz',
      memorySpeed: '21 Gbps',
      interface: 'PCIe 4.0 x16',
      outputs: '3x DisplayPort 1.4a, 1x HDMI 2.1',
      powerConnector: '8-pin',
      tdp: '200W'
    },
    features: [
      'Ada Lovelace architecture',
      'DLSS 3 enabled',
      'Efficient power usage',
      'Great 1440p performance'
    ]
  },
  {
    id: 17,
    name: 'Corsair Vengeance DDR5 32GB',
    slug: 'corsair-vengeance-ddr5-32gb',
    category: 'ram',
    brand: 'Corsair',
    price: 139.99,
    originalPrice: 179.99,
    image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 178,
    stock: 42,
    featured: true,
    description: 'High-speed DDR5 memory for next-gen platforms.',
    specifications: {
      capacity: '32GB (2x16GB)',
      type: 'DDR5',
      speed: '5600MHz',
      cas: 'CL36',
      voltage: '1.25V',
      profile: 'XMP 3.0'
    },
    features: [
      'DDR5 technology',
      'Intel XMP 3.0 ready',
      'Custom PCB',
      'Low-profile heat spreader'
    ]
  },
  {
    id: 18,
    name: 'G.Skill Trident Z5 RGB 32GB',
    slug: 'gskill-trident-z5-rgb-32gb',
    category: 'ram',
    brand: 'G.Skill',
    price: 159.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 145,
    stock: 36,
    featured: false,
    description: 'Premium DDR5 RAM with RGB lighting.',
    specifications: {
      capacity: '32GB (2x16GB)',
      type: 'DDR5',
      speed: '6000MHz',
      cas: 'CL36',
      voltage: '1.35V',
      profile: 'XMP 3.0'
    },
    features: [
      'High-speed 6000MHz',
      'RGB lighting',
      'Premium heat spreader',
      'Excellent performance'
    ]
  },
  {
    id: 19,
    name: 'Kingston Fury Beast DDR5 16GB',
    slug: 'kingston-fury-beast-ddr5-16gb',
    category: 'ram',
    brand: 'Kingston',
    price: 69.99,
    originalPrice: 89.99,
    image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    reviews: 234,
    stock: 58,
    featured: false,
    description: 'Affordable DDR5 memory.',
    specifications: {
      capacity: '16GB (2x8GB)',
      type: 'DDR5',
      speed: '5200MHz',
      cas: 'CL40',
      voltage: '1.25V',
      profile: 'XMP 3.0'
    },
    features: [
      'Budget-friendly',
      'Reliable performance',
      'Low-profile design',
      'Plug and play'
    ]
  },
  {
    id: 20,
    name: 'Corsair Dominator Platinum RGB 64GB',
    slug: 'corsair-dominator-platinum-rgb-64gb',
    category: 'ram',
    brand: 'Corsair',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 89,
    stock: 18,
    featured: false,
    description: 'Premium high-capacity memory.',
    specifications: {
      capacity: '64GB (2x32GB)',
      type: 'DDR5',
      speed: '6000MHz',
      cas: 'CL36',
      voltage: '1.35V',
      profile: 'XMP 3.0'
    },
    features: [
      'High capacity 64GB',
      'Premium RGB lighting',
      'Excellent overclocking',
      'Premium build quality'
    ]
  },
  {
    id: 21,
    name: 'G.Skill Ripjaws S5 32GB',
    slug: 'gskill-ripjaws-s5-32gb',
    category: 'ram',
    brand: 'G.Skill',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 167,
    stock: 45,
    featured: false,
    description: 'Value DDR5 memory kit.',
    specifications: {
      capacity: '32GB (2x16GB)',
      type: 'DDR5',
      speed: '5600MHz',
      cas: 'CL28',
      voltage: '1.25V',
      profile: 'XMP 3.0'
    },
    features: [
      'Great value',
      'Low latency',
      'Reliable performance',
      'Sleek design'
    ]
  },
  {
    id: 22,
    name: 'Kingston Fury Renegade DDR5 32GB',
    slug: 'kingston-fury-renegade-ddr5-32gb',
    category: 'ram',
    brand: 'Kingston',
    price: 149.99,
    originalPrice: 179.99,
    image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 123,
    stock: 33,
    featured: false,
    description: 'High-performance DDR5 gaming memory.',
    specifications: {
      capacity: '32GB (2x16GB)',
      type: 'DDR5',
      speed: '6400MHz',
      cas: 'CL32',
      voltage: '1.35V',
      profile: 'XMP 3.0'
    },
    features: [
      'High 6400MHz speed',
      'RGB lighting',
      'Great overclocking',
      'Premium heat spreader'
    ]
  },
  {
    id: 23,
    name: 'ASUS ROG Strix Z790-E Gaming',
    slug: 'asus-rog-strix-z790-e-gaming',
    category: 'motherboard',
    brand: 'ASUS',
    price: 389.99,
    originalPrice: 449.99,
    image: 'https://images.pexels.com/photos/18657569/pexels-photo-18657569.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 156,
    stock: 14,
    featured: true,
    description: 'Premium Intel Z790 motherboard.',
    specifications: {
      chipset: 'Intel Z790',
      socket: 'LGA1700',
      formFactor: 'ATX',
      memory: 'DDR5 up to 7800MHz',
      slots: '4x DIMM',
      pcie: 'PCIe 5.0',
      storage: '5x M.2, 6x SATA'
    },
    features: [
      'PCIe 5.0 support',
      'WiFi 6E included',
      'Premium VRM',
      'RGB lighting'
    ]
  },
  {
    id: 24,
    name: 'MSI MAG B650 Tomahawk WiFi',
    slug: 'msi-mag-b650-tomahawk-wifi',
    category: 'motherboard',
    brand: 'MSI',
    price: 229.99,
    originalPrice: 269.99,
    image: 'https://images.pexels.com/photos/18657569/pexels-photo-18657569.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 189,
    stock: 22,
    featured: false,
    description: 'Excellent AMD B650 motherboard.',
    specifications: {
      chipset: 'AMD B650',
      socket: 'AM5',
      formFactor: 'ATX',
      memory: 'DDR5 up to 6400MHz',
      slots: '4x DIMM',
      pcie: 'PCIe 5.0',
      storage: '3x M.2, 4x SATA'
    },
    features: [
      'WiFi 6E',
      'PCIe 5.0 ready',
      'Great VRM',
      'Excellent value'
    ]
  },
  {
    id: 25,
    name: 'Gigabyte X670E AORUS Master',
    slug: 'gigabyte-x670e-aorus-master',
    category: 'motherboard',
    brand: 'Gigabyte',
    price: 449.99,
    originalPrice: 529.99,
    image: 'https://images.pexels.com/photos/18657569/pexels-photo-18657569.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 98,
    stock: 9,
    featured: false,
    description: 'High-end AMD X670E motherboard.',
    specifications: {
      chipset: 'AMD X670E',
      socket: 'AM5',
      formFactor: 'ATX',
      memory: 'DDR5 up to 7600MHz',
      slots: '4x DIMM',
      pcie: 'PCIe 5.0',
      storage: '5x M.2, 8x SATA'
    },
    features: [
      'Premium features',
      'Dual PCIe 5.0 M.2',
      'WiFi 6E',
      'Excellent overclocking'
    ]
  },
  {
    id: 26,
    name: 'ASUS TUF Gaming B760-PLUS WiFi',
    slug: 'asus-tuf-gaming-b760-plus-wifi',
    category: 'motherboard',
    brand: 'ASUS',
    price: 189.99,
    originalPrice: 219.99,
    image: 'https://images.pexels.com/photos/18657569/pexels-photo-18657569.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 234,
    stock: 28,
    featured: false,
    description: 'Budget-friendly Intel B760 board.',
    specifications: {
      chipset: 'Intel B760',
      socket: 'LGA1700',
      formFactor: 'ATX',
      memory: 'DDR5 up to 7200MHz',
      slots: '4x DIMM',
      pcie: 'PCIe 5.0',
      storage: '3x M.2, 4x SATA'
    },
    features: [
      'Great value',
      'WiFi 6',
      'Solid VRM',
      'PCIe 5.0 GPU slot'
    ]
  },
  {
    id: 27,
    name: 'MSI MPG Z790 Carbon WiFi',
    slug: 'msi-mpg-z790-carbon-wifi',
    category: 'motherboard',
    brand: 'MSI',
    price: 349.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/18657569/pexels-photo-18657569.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 145,
    stock: 16,
    featured: false,
    description: 'Premium Z790 with WiFi 6E.',
    specifications: {
      chipset: 'Intel Z790',
      socket: 'LGA1700',
      formFactor: 'ATX',
      memory: 'DDR5 up to 7600MHz',
      slots: '4x DIMM',
      pcie: 'PCIe 5.0',
      storage: '5x M.2, 6x SATA'
    },
    features: [
      'WiFi 6E',
      'Premium audio',
      'RGB fusion',
      'Great overclocking'
    ]
  },
  {
    id: 28,
    name: 'Gigabyte B650 AORUS Elite AX',
    slug: 'gigabyte-b650-aorus-elite-ax',
    category: 'motherboard',
    brand: 'Gigabyte',
    price: 199.99,
    originalPrice: 239.99,
    image: 'https://images.pexels.com/photos/18657569/pexels-photo-18657569.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    reviews: 167,
    stock: 25,
    featured: false,
    description: 'Solid B650 motherboard.',
    specifications: {
      chipset: 'AMD B650',
      socket: 'AM5',
      formFactor: 'ATX',
      memory: 'DDR5 up to 6400MHz',
      slots: '4x DIMM',
      pcie: 'PCIe 4.0',
      storage: '3x M.2, 4x SATA'
    },
    features: [
      'WiFi 6E',
      'Good VRM',
      'PCIe 4.0',
      'Great value'
    ]
  },
  {
    id: 29,
    name: 'Samsung 990 PRO 2TB NVMe SSD',
    slug: 'samsung-990-pro-2tb-nvme-ssd',
    category: 'storage',
    brand: 'Samsung',
    price: 179.99,
    originalPrice: 229.99,
    image: 'https://images.pexels.com/photos/2339722/pexels-photo-2339722.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviews: 456,
    stock: 67,
    featured: true,
    description: 'Blazing fast PCIe 4.0 NVMe SSD.',
    specifications: {
      capacity: '2TB',
      interface: 'PCIe 4.0 x4 NVMe',
      formFactor: 'M.2 2280',
      readSpeed: '7450 MB/s',
      writeSpeed: '6900 MB/s',
      tbw: '1200 TBW',
      warranty: '5 years'
    },
    features: [
      'Exceptional speed',
      'Samsung reliability',
      'Great for gaming',
      '5-year warranty'
    ]
  },
  {
    id: 30,
    name: 'WD Black SN850X 1TB NVMe SSD',
    slug: 'wd-black-sn850x-1tb-nvme-ssd',
    category: 'storage',
    brand: 'Western Digital',
    price: 99.99,
    originalPrice: 149.99,
    image: 'https://images.pexels.com/photos/2339722/pexels-photo-2339722.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 389,
    stock: 54,
    featured: false,
    description: 'High-performance gaming SSD.',
    specifications: {
      capacity: '1TB',
      interface: 'PCIe 4.0 x4 NVMe',
      formFactor: 'M.2 2280',
      readSpeed: '7300 MB/s',
      writeSpeed: '6300 MB/s',
      tbw: '600 TBW',
      warranty: '5 years'
    },
    features: [
      'Gaming optimized',
      'Fast speeds',
      'Heatsink included',
      'Reliable performance'
    ]
  },
  {
    id: 31,
    name: 'Samsung 870 EVO 2TB SATA SSD',
    slug: 'samsung-870-evo-2tb-sata-ssd',
    category: 'storage',
    brand: 'Samsung',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.pexels.com/photos/2339722/pexels-photo-2339722.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 678,
    stock: 89,
    featured: false,
    description: 'Reliable SATA SSD for storage.',
    specifications: {
      capacity: '2TB',
      interface: 'SATA III 6Gb/s',
      formFactor: '2.5-inch',
      readSpeed: '560 MB/s',
      writeSpeed: '530 MB/s',
      tbw: '1200 TBW',
      warranty: '5 years'
    },
    features: [
      'High capacity',
      'Proven reliability',
      'Great for storage',
      'Affordable'
    ]
  },
  {
    id: 32,
    name: 'Seagate FireCuda 530 2TB',
    slug: 'seagate-firecuda-530-2tb',
    category: 'storage',
    brand: 'Seagate',
    price: 189.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/2339722/pexels-photo-2339722.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 234,
    stock: 42,
    featured: false,
    description: 'PCIe Gen4 speed demon.',
    specifications: {
      capacity: '2TB',
      interface: 'PCIe 4.0 x4 NVMe',
      formFactor: 'M.2 2280',
      readSpeed: '7300 MB/s',
      writeSpeed: '6900 MB/s',
      tbw: '2550 TBW',
      warranty: '5 years'
    },
    features: [
      'Extreme speeds',
      'High endurance',
      'Heatsink included',
      'PS5 compatible'
    ]
  },
  {
    id: 33,
    name: 'Crucial P5 Plus 1TB NVMe SSD',
    slug: 'crucial-p5-plus-1tb-nvme-ssd',
    category: 'storage',
    brand: 'Corsair',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/2339722/pexels-photo-2339722.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 312,
    stock: 78,
    featured: false,
    description: 'Fast and affordable NVMe drive.',
    specifications: {
      capacity: '1TB',
      interface: 'PCIe 4.0 x4 NVMe',
      formFactor: 'M.2 2280',
      readSpeed: '6600 MB/s',
      writeSpeed: '5000 MB/s',
      tbw: '600 TBW',
      warranty: '5 years'
    },
    features: [
      'Great value',
      'Fast performance',
      'Low power consumption',
      'Reliable'
    ]
  },
  {
    id: 34,
    name: 'WD Blue 4TB HDD',
    slug: 'wd-blue-4tb-hdd',
    category: 'storage',
    brand: 'Western Digital',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/2339722/pexels-photo-2339722.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    reviews: 892,
    stock: 124,
    featured: false,
    description: 'High-capacity storage drive.',
    specifications: {
      capacity: '4TB',
      interface: 'SATA III 6Gb/s',
      formFactor: '3.5-inch',
      rpm: '5400 RPM',
      cache: '256MB',
      tbw: 'N/A',
      warranty: '2 years'
    },
    features: [
      'Large capacity',
      'Quiet operation',
      'Reliable storage',
      'Affordable per GB'
    ]
  },
  {
    id: 35,
    name: 'Corsair RM850e 850W 80+ Gold',
    slug: 'corsair-rm850e-850w-80-gold',
    category: 'psu',
    brand: 'Corsair',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://images.pexels.com/photos/7947428/pexels-photo-7947428.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 267,
    stock: 38,
    featured: true,
    description: 'Reliable 850W fully modular PSU.',
    specifications: {
      wattage: '850W',
      efficiency: '80+ Gold',
      modular: 'Fully Modular',
      fan: '135mm',
      pcie: '4x 8-pin',
      warranty: '10 years',
      cables: 'Black braided'
    },
    features: [
      '80+ Gold certified',
      'Fully modular',
      'Silent operation',
      '10-year warranty'
    ]
  },
  {
    id: 36,
    name: 'Seasonic Focus GX-750 750W',
    slug: 'seasonic-focus-gx-750-750w',
    category: 'psu',
    brand: 'Seasonic',
    price: 119.99,
    originalPrice: 139.99,
    image: 'https://images.pexels.com/photos/7947428/pexels-photo-7947428.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviews: 345,
    stock: 29,
    featured: false,
    description: 'Premium 750W power supply.',
    specifications: {
      wattage: '750W',
      efficiency: '80+ Gold',
      modular: 'Fully Modular',
      fan: '135mm',
      pcie: '4x 8-pin',
      warranty: '10 years',
      cables: 'Flat black'
    },
    features: [
      'Seasonic quality',
      'Silent operation',
      'Fully modular',
      'Great efficiency'
    ]
  },
  {
    id: 37,
    name: 'EVGA SuperNOVA 1000 GT',
    slug: 'evga-supernova-1000-gt',
    category: 'psu',
    brand: 'EVGA',
    price: 179.99,
    originalPrice: 219.99,
    image: 'https://images.pexels.com/photos/7947428/pexels-photo-7947428.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 178,
    stock: 16,
    featured: false,
    description: 'High-wattage PSU for enthusiasts.',
    specifications: {
      wattage: '1000W',
      efficiency: '80+ Gold',
      modular: 'Fully Modular',
      fan: '135mm',
      pcie: '6x 8-pin',
      warranty: '10 years',
      cables: 'Black sleeved'
    },
    features: [
      '1000W power',
      'Multi-GPU ready',
      'Fully modular',
      'Quiet fan'
    ]
  },
  {
    id: 38,
    name: 'be quiet! Pure Power 12M 650W',
    slug: 'be-quiet-pure-power-12m-650w',
    category: 'psu',
    brand: 'be quiet!',
    price: 99.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/7947428/pexels-photo-7947428.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 223,
    stock: 45,
    featured: false,
    description: 'Silent 650W PSU.',
    specifications: {
      wattage: '650W',
      efficiency: '80+ Gold',
      modular: 'Fully Modular',
      fan: '120mm',
      pcie: '3x 8-pin',
      warranty: '10 years',
      cables: 'Black'
    },
    features: [
      'Ultra quiet',
      '80+ Gold',
      'Fully modular',
      'Great value'
    ]
  },
  {
    id: 39,
    name: 'NZXT H510 Elite',
    slug: 'nzxt-h510-elite',
    category: 'case',
    brand: 'NZXT',
    price: 149.99,
    originalPrice: 179.99,
    image: 'https://images.pexels.com/photos/2582930/pexels-photo-2582930.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 456,
    stock: 28,
    featured: true,
    description: 'Premium mid-tower case with tempered glass.',
    specifications: {
      type: 'Mid Tower',
      motherboard: 'ATX, mATX, Mini-ITX',
      gpu: 'Up to 381mm',
      cpu: 'Up to 165mm',
      fans: '2x 140mm included',
      radiator: 'Up to 280mm',
      drives: '2x 3.5", 4x 2.5"'
    },
    features: [
      'Tempered glass panel',
      'RGB lighting',
      'Cable management',
      'Premium build quality'
    ]
  },
  {
    id: 40,
    name: 'Corsair 4000D Airflow',
    slug: 'corsair-4000d-airflow',
    category: 'case',
    brand: 'Corsair',
    price: 104.99,
    originalPrice: 129.99,
    image: 'https://images.pexels.com/photos/2582930/pexels-photo-2582930.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 678,
    stock: 42,
    featured: false,
    description: 'Excellent airflow mid-tower.',
    specifications: {
      type: 'Mid Tower',
      motherboard: 'ATX, mATX, Mini-ITX',
      gpu: 'Up to 360mm',
      cpu: 'Up to 170mm',
      fans: '2x 120mm included',
      radiator: 'Up to 360mm',
      drives: '2x 3.5", 2x 2.5"'
    },
    features: [
      'Excellent airflow',
      'Tempered glass',
      'Tool-free design',
      'Great value'
    ]
  },
  {
    id: 41,
    name: 'Lian Li O11 Dynamic EVO',
    slug: 'lian-li-o11-dynamic-evo',
    category: 'case',
    brand: 'NZXT',
    price: 159.99,
    originalPrice: 189.99,
    image: 'https://images.pexels.com/photos/2582930/pexels-photo-2582930.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviews: 389,
    stock: 18,
    featured: false,
    description: 'Premium showcase case.',
    specifications: {
      type: 'Mid Tower',
      motherboard: 'ATX, E-ATX, mATX, Mini-ITX',
      gpu: 'Up to 420mm',
      cpu: 'Up to 167mm',
      fans: 'Not included',
      radiator: 'Up to 360mm x3',
      drives: '3x 2.5", 2x 3.5"'
    },
    features: [
      'Dual tempered glass',
      'Vertical GPU mount',
      'Triple radiator support',
      'Premium design'
    ]
  },
  {
    id: 42,
    name: 'Fractal Design Meshify 2',
    slug: 'fractal-design-meshify-2',
    category: 'case',
    brand: 'Cooler Master',
    price: 139.99,
    originalPrice: 169.99,
    image: 'https://images.pexels.com/photos/2582930/pexels-photo-2582930.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 234,
    stock: 31,
    featured: false,
    description: 'High-airflow mid-tower case.',
    specifications: {
      type: 'Mid Tower',
      motherboard: 'ATX, E-ATX, mATX, Mini-ITX',
      gpu: 'Up to 315mm',
      cpu: 'Up to 169mm',
      fans: '3x 140mm included',
      radiator: 'Up to 360mm',
      drives: '4x 3.5"/2.5"'
    },
    features: [
      'Mesh front panel',
      'Excellent airflow',
      'USB-C port',
      'Modular design'
    ]
  },
  {
    id: 43,
    name: 'Noctua NH-D15 CPU Cooler',
    slug: 'noctua-nh-d15-cpu-cooler',
    category: 'cooling',
    brand: 'Noctua',
    price: 109.99,
    originalPrice: 129.99,
    image: 'https://images.pexels.com/photos/2582931/pexels-photo-2582931.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviews: 892,
    stock: 56,
    featured: true,
    description: 'Premium dual-tower air cooler.',
    specifications: {
      type: 'Air Cooler',
      height: '165mm',
      fans: '2x 140mm',
      tdp: '220W+',
      socket: 'Intel LGA1700/1200, AMD AM5/AM4',
      noise: '24.6 dBA',
      warranty: '6 years'
    },
    features: [
      'Exceptional cooling',
      'Silent operation',
      'Premium build',
      'Easy installation'
    ]
  },
  {
    id: 44,
    name: 'Corsair iCUE H150i Elite LCD',
    slug: 'corsair-icue-h150i-elite-lcd',
    category: 'cooling',
    brand: 'Corsair',
    price: 269.99,
    originalPrice: 299.99,
    image: 'https://images.pexels.com/photos/2582931/pexels-photo-2582931.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 345,
    stock: 24,
    featured: false,
    description: 'AIO with customizable LCD display.',
    specifications: {
      type: 'AIO Liquid Cooler',
      size: '360mm',
      fans: '3x 120mm RGB',
      tdp: '250W+',
      socket: 'Intel LGA1700/1200, AMD AM5/AM4',
      noise: '36 dBA',
      warranty: '5 years'
    },
    features: [
      'LCD screen',
      'RGB lighting',
      'Powerful cooling',
      'iCUE software'
    ]
  },
  {
    id: 45,
    name: 'be quiet! Dark Rock Pro 4',
    slug: 'be-quiet-dark-rock-pro-4',
    category: 'cooling',
    brand: 'be quiet!',
    price: 89.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/2582931/pexels-photo-2582931.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 567,
    stock: 38,
    featured: false,
    description: 'Silent dual-tower cooler.',
    specifications: {
      type: 'Air Cooler',
      height: '162.8mm',
      fans: '1x 120mm, 1x 135mm',
      tdp: '250W',
      socket: 'Intel LGA1700/1200, AMD AM5/AM4',
      noise: '24.3 dBA',
      warranty: '3 years'
    },
    features: [
      'Extremely quiet',
      'Black design',
      'Great cooling',
      'Premium quality'
    ]
  },
  {
    id: 46,
    name: 'NZXT Kraken X63 RGB',
    slug: 'nzxt-kraken-x63-rgb',
    category: 'cooling',
    brand: 'NZXT',
    price: 149.99,
    originalPrice: 179.99,
    image: 'https://images.pexels.com/photos/2582931/pexels-photo-2582931.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 423,
    stock: 32,
    featured: false,
    description: '280mm AIO liquid cooler.',
    specifications: {
      type: 'AIO Liquid Cooler',
      size: '280mm',
      fans: '2x 140mm RGB',
      tdp: '250W',
      socket: 'Intel LGA1700/1200, AMD AM5/AM4',
      noise: '35 dBA',
      warranty: '6 years'
    },
    features: [
      'RGB lighting',
      'Rotating cap',
      'CAM software',
      'Great performance'
    ]
  }
];

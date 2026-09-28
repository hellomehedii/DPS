export type NavKey = "home" | "projects" | "services" | "contact";

export const siteName = "DPS Project Solutions";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.dpsbd.com";

export const siteDescription =
  "DPS Project Solutions provides consultancy, design coordination, project management, global sourcing, procurement, construction, and turnkey project delivery.";

export const navItems: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "projects", label: "Projects", href: "/projects" },
  { key: "services", label: "Services", href: "/services" },
  // { key: "contact", label: "Contact", href: "/contact" },
];

export type ServiceCapability = {
  title: string;
  description: string;
};

export const serviceCapabilities: ServiceCapability[] = [
  {
    title: "Project Planning & Feasibility",
    description:
      "Early-stage feasibility assessment, requirement analysis, preliminary budgeting, implementation planning, and practical project roadmaps.",
  },
  {
    title: "Architectural & Engineering Design",
    description:
      "Architectural planning, design development, engineering coordination, interior design, and specialist design support through Dhaka Open Studio Ltd. (DOS).",
  },
  {
    title: "Design Development & Coordination",
    description:
      "Coordination across architectural, structural, MEP, and specialist disciplines to create practical, coordinated, execution-ready solutions.",
  },
  {
    title: "Project Management Consultancy (PMC)",
    description:
      "Planning, scheduling, cost control, design coordination, procurement management, construction monitoring, quality management, and stakeholder coordination.",
  },
  {
    title: "Construction Management & Supervision",
    description:
      "Management and monitoring of construction activities to maintain quality, progress, cost control, and compliance with approved drawings and standards.",
  },
  {
    title: "Construction & Turnkey Solutions",
    description:
      "PMC, construction management, and turnkey delivery models integrating design, procurement, construction, and final handover.",
  },
  {
    title: "Cost Planning, BOQ & Value Engineering",
    description:
      "Project budgets, Bills of Quantities, cost plans, and value-engineering proposals that balance performance, quality, and commercial efficiency.",
  },
  {
    title: "DPP Preparation & Project Documentation",
    description:
      "Development Project Proposal documentation, BOQs, cost estimates, technical specifications, tender documentation, and related project records.",
  },
  {
    title: "Tendering & Procurement Management",
    description:
      "Tender planning, procurement strategy, bid evaluation, supplier coordination, and technical support for purchasing decisions.",
  },
  {
    title: "International Product & Material Sourcing",
    description:
      "Sourcing of architectural materials, building products, equipment, technologies, and specialized solutions from local and international markets.",
  },
  {
    title: "China, Hong Kong, Malaysia & Europe Sourcing",
    description:
      "Established sourcing networks across China, Hong Kong, Malaysia, and Europe for project-specific products and technical solutions.",
  },
  {
    title: "Supplier & Manufacturer Selection",
    description:
      "Identification of suitable suppliers and manufacturers with coordination of samples, specifications, pricing, and production requirements.",
  },
  {
    title: "Quality Control (QC) & Production Monitoring",
    description:
      "Production quality monitoring and quality-control activities before shipment to confirm compliance with project requirements.",
  },
  {
    title: "International Brand Collaboration",
    description:
      "Collaboration with international brands and manufacturers to access proven technology, quality standards, and project-ready products.",
  },
  {
    title: "Customized Product Development & OEM Solutions",
    description:
      "Custom dimensions, finishes, specifications, and OEM manufacturing coordination where standard products do not meet project requirements.",
  },
  {
    title: "Building Materials & Equipment Supply",
    description:
      "Supply of architectural materials, finishing products, building systems, specialized equipment, and other project-specific products.",
  },
  {
    title: "Forwarding, Freight & Logistics Management",
    description:
      "Factory-to-project logistics support including consolidation, export documentation, freight, and international shipment coordination.",
  },
  {
    title: "Bangladesh Customs Clearance & Delivery Coordination",
    description:
      "Customs clearance and delivery coordination in Bangladesh to connect international sourcing with local project delivery.",
  },
  {
    title: "Installation, Testing & Commissioning",
    description:
      "Installation coordination, technical supervision, testing, and commissioning so supplied products and systems are properly integrated and operational.",
  },
  {
    title: "Turnkey Project Delivery",
    description:
      "Single-source coordination of design, budgeting, sourcing, procurement, logistics, construction, installation, testing, and final handover.",
  },
  {
    title: "After-Sales, Warranty & Defect Liability Support",
    description:
      "Warranty and Defect Liability Period support, including coordination with manufacturers, suppliers, and technical teams for corrective works and claims.",
  },
];

export const services = serviceCapabilities.map((service) => service.title);

export const contactPhoneNumbers = ["01730584401"];

export const contactEmail = "info@dpsbd.com";

export const contactAddress = "SAR Bhaban(8th floor) Ka-78, Pragati Sarani Main Road, Dhaka 1229, Bangladesh";

export const whatsappHref =
  "https://wa.me/8801730584401?text=Hello%20DPS%20Project%20Solutions%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

export type ProjectCategory = "Commercial" | "Residential" | "Others";

export type Project = {
  src: string;
  title: string;
  category: ProjectCategory;
  description: string;
};

const projectSortOrder: Record<ProjectCategory, number> = {
  Commercial: 0,
  Residential: 1,
  Others: 2,
};

const projectTitleCollator = new Intl.Collator("en", {
  numeric: true,
  sensitivity: "base",
});

const projectEntries: Project[] = [
  {
    src: "/projects/real/Adrok_Restaurant_Y.jpeg",
    title: "Adrok Restaurant Y",
    category: "Commercial",
    description: "A contemporary restaurant project planned for visibility, customer flow, and an inviting dining experience.",
  },
  {
    src: "/projects/real/AKA_Residence.jpeg",
    title: "AKA Residence",
    category: "Residential",
    description: "A modern private residence designed around natural light, comfort, and efficient family living.",
  },
  {
    src: "/projects/real/Ask_Mizan.jpeg",
    title: "Ask Mizan",
    category: "Residential",
    description: "A custom residential concept balancing practical space planning, ventilation, and a clean exterior form.",
  },
  {
    src: "/projects/real/Col_Ferdous_Residence.jpeg",
    title: "Col Ferdous Residence",
    category: "Residential",
    description: "An elegant residence with structured facade composition, comfortable interiors, and a refined visual identity.",
  },
  {
    src: "/projects/real/Condominium_X.jpeg",
    title: "Condominium X",
    category: "Residential",
    description: "A mid-rise condominium proposal focused on livability, natural light, and efficient shared residential planning.",
  },
  {
    src: "/projects/real/Coxs_Hotel.jpeg",
    title: "Cox's Hotel",
    category: "Commercial",
    description: "A hospitality project shaped for guest comfort, strong presence, and efficient room and service organization.",
  },
  {
    src: "/projects/real/Gias_Residence.jpeg",
    title: "Gias Residence",
    category: "Residential",
    description: "A residence concept with clean elevations, functional layouts, and a warm modern living environment.",
  },
  {
    src: "/projects/real/Hotel_100_Key_Hotel.jpeg",
    title: "100 Key Hotel",
    category: "Commercial",
    description: "A large hotel planning concept organized for guest circulation, room efficiency, and operational clarity.",
  },
  {
    src: "/projects/real/IQBAL_Residence.jpeg",
    title: "Iqbal Residence",
    category: "Residential",
    description: "A thoughtfully planned private home focused on daylight, comfort, and a timeless residential expression.",
  },
  {
    src: "/projects/real/Jahangir_Residence.jpeg",
    title: "Jahangir Residence",
    category: "Residential",
    description: "A custom family residence with balanced proportions, practical circulation, and a composed front elevation.",
  },
  {
    src: "/projects/real/Kazi_Heights.jpeg",
    title: "Kazi Heights",
    category: "Commercial",
    description: "A multi-storey development envisioned for urban presence, usable floor plates, and long-term functionality.",
  },
  {
    src: "/projects/real/Pink_City_Mosque.jpeg",
    title: "Pink City Mosque",
    category: "Others",
    description: "A community mosque concept emphasizing openness, clarity, and a respectful architectural identity.",
  },
  {
    src: "/projects/real/Villa_Pink_City.jpeg",
    title: "Villa Pink City",
    category: "Residential",
    description: "A premium villa concept blending privacy, openness, and modern residential character in one scheme.",
  },
  {
    src: "/projects/pptx/smamch-auditorium-cum-hostel.jpeg",
    title: "SMAMCH Auditorium Cum Hostel",
    category: "Others",
    description: "An under-construction Uttara project combining an auditorium with large-scale hostel accommodation.",
  },
  {
    src: "/projects/pptx/rangpur-army-medical-college-hospital.jpeg",
    title: "Rangpur Army Medical College & Hospital",
    category: "Others",
    description: "A major medical campus project in Rangpur Cantonment planned for education, treatment, and public service.",
  },
  {
    src: "/projects/pptx/afmc-hostel-auditorium.jpeg",
    title: "AFMC Hostel & Auditorium",
    category: "Others",
    description: "A proposed Dhaka Cantonment development combining student accommodation and an institutional auditorium.",
  },
  {
    src: "/projects/pptx/ha-meem-group-hq.png",
    title: "Ha-Meem Group HQ",
    category: "Commercial",
    description: "A corporate headquarters project in Tejgaon Industrial Area designed for office efficiency and brand presence.",
  },
  {
    src: "/projects/pptx/park-view-metropolitan-hospital.jpeg",
    title: "Park View Metropolitan Hospital",
    category: "Others",
    description: "A Chattogram hospital project organized for treatment spaces, patient flow, and operational clarity.",
  },
  {
    src: "/projects/pptx/health-engineering-department-head-office.jpeg",
    title: "Health Engineering Department (HED) Head Office",
    category: "Others",
    description: "An under-construction Agargaon office project planned for public-sector administration and modern workplace needs.",
  },
  {
    src: "/projects/pptx/best-way-bhawal-eco-village.jpeg",
    title: "Best Way Bhawal Eco Village",
    category: "Commercial",
    description: "A large Gazipur eco-village project designed for destination-scale commercial and hospitality use.",
  },
  {
    src: "/projects/pptx/sheikh-sayera-khatun-medical-college-hospital-nursing-institute.jpeg",
    title: "Sheikh Sayera Khatun Medical College Hospital & Nursing Institute",
    category: "Others",
    description: "A major healthcare and nursing campus project in Gopalgonj with large-scale institutional planning.",
  },
  {
    src: "/projects/pptx/dhaka-dental-college-hospital.jpeg",
    title: "Dhaka Dental College & Hospital",
    category: "Others",
    description: "A completed academic healthcare project planned for clinical service and dental education functions.",
  },
  {
    src: "/projects/pptx/arjumoni-mother-child-care-hospital.jpeg",
    title: "50 Bed Arjumoni Mother and Child Care Hospital",
    category: "Others",
    description: "A completed Hazaribagh hospital project focused on maternal care, child care, and efficient clinical planning.",
  },
  {
    src: "/projects/pptx/genesis-hospital.jpeg",
    title: "50 Bed Genesis Hospital",
    category: "Others",
    description: "A completed Jessore hospital project designed for compact healthcare delivery and smooth circulation.",
  },
  {
    src: "/projects/pptx/bangladesh-university-of-professionals.jpg",
    title: "Bangladesh University of Professionals (BUP)",
    category: "Others",
    description: "An academic campus building project in Mirpur Cantonment planned for learning spaces and durable institutional use.",
  },
  {
    src: "/projects/pptx/niport.jpeg",
    title: "National Institute of Population Research and Training (NIPORT)",
    category: "Others",
    description: "An under-construction Azimpur project combining research, training, and administrative functions.",
  },
  {
    src: "/projects/pptx/executive-engineers-office-hed.jpeg",
    title: "Executive Engineer's Office, Health Engineering Department (HED)",
    category: "Others",
    description: "A multi-district HED office project planned for public delivery and administrative support.",
  },
  {
    src: "/projects/pptx/humdard-university-bangladesh.jpeg",
    title: "Humdard University Bangladesh (HUB)",
    category: "Others",
    description: "A long-term university campus project in Gazaria planned for large-scale academic growth.",
  },
  {
    src: "/projects/pptx/rongdhanu-city-centre.jpeg",
    title: "Rongdhanu City Centre",
    category: "Commercial",
    description: "A major Bashundhara city-centre project planned for high-density commercial activity and urban presence.",
  },
  {
    src: "/projects/pptx/old-home-rangpur-cantonment.jpeg",
    title: "Old Home, Rangpur Cantonment",
    category: "Residential",
    description: "A partially completed care-home project in Rangpur Cantonment focused on resident comfort and support spaces.",
  },
  {
    src: "/projects/pptx/directorate-general-drug-administration.jpeg",
    title: "Directorate General of Drug Administration (DGDA)",
    category: "Others",
    description: "A completed public administration project planned for regulatory operations and office functionality.",
  },
  {
    src: "/projects/pptx/cantonment-public-school-college-hostel.jpeg",
    title: "Cantonment Public School & College Hostel",
    category: "Others",
    description: "A completed campus hostel project in Rangpur Cantonment planned for student accommodation.",
  },
  {
    src: "/projects/pptx/cantonment-public-school-college.jpeg",
    title: "Cantonment Public School & College",
    category: "Others",
    description: "A large proposed academic campus project in Rangpur Cantonment with broad educational facilities.",
  },
  {
    src: "/projects/pptx/rangdhanu-commercial-building.jpeg",
    title: "Rangdhanu Commercial Building",
    category: "Commercial",
    description: "An under-construction Bashundhara commercial building designed for flexible business use and urban frontage.",
  },
  {
    src: "/projects/pptx/rongdhonu-square.jpeg",
    title: "Rongdhonu Square",
    category: "Commercial",
    description: "A large Progati Sarani commercial complex planned for mixed-use activity, visibility, and heavy footfall.",
  },
  {
    src: "/projects/pptx/proyash-school-rangpur.png",
    title: "Proyash School Rangpur",
    category: "Others",
    description: "A partially completed school project in Rangpur Cantonment planned for structured learning environments.",
  },
  {
    src: "/projects/pptx/special-ed-school.png",
    title: "Special ED School",
    category: "Others",
    description: "An under-construction educational campus in Chattogram designed for accessible and specialized learning spaces.",
  },
  {
    src: "/projects/pptx/rangdhanu-mart-bashundhara.svg",
    title: "Rangdhanu Mart, Bashundhara",
    category: "Commercial",
    description: "A Bashundhara retail development from the deck; this slide had no embedded image, so a branded fallback visual is used.",
  },
  {
    src: "/projects/pptx/comilla-mixed-use-apartment.png",
    title: "Comilla Mixed Use Apartment",
    category: "Residential",
    description: "A completed mixed-use apartment project in Comilla balancing residential living with integrated urban functions.",
  },
  {
    src: "/projects/pptx/rangpur-city-centre.png",
    title: "Rangpur City Centre, Rangpur",
    category: "Commercial",
    description: "A proposed city-centre project in Rangpur planned for large-scale commercial presence and public access.",
  },
  {
    src: "/projects/pptx/rangdhanu-sports-club.png",
    title: "Rangdhanu Sports Club",
    category: "Commercial",
    description: "An under-construction sports club project in Purbachol designed for recreation and social gathering.",
  },
  {
    src: "/projects/pptx/epc-sea-inn.png",
    title: "EPC Sea Inn",
    category: "Commercial",
    description: "A proposed hospitality project in Cox's Bazar planned for high-capacity guest accommodation.",
  },
  {
    src: "/projects/pptx/dove-sea-queen-star-hotel.png",
    title: "Dove Sea Queen Star Hotel",
    category: "Commercial",
    description: "A completed hotel project in Cox's Bazar designed for beachfront hospitality and efficient guest services.",
  },
  {
    src: "/projects/pptx/sagor-nibash-hostel-himchari-coxs-bazar.jpeg",
    title: "Sagor Nibash Hostel, Himchari, Cox's Bazar",
    category: "Commercial",
    description: "A proposed Himchari hospitality project planned for guest lodging near the Cox's Bazar waterfront.",
  },
  {
    src: "/projects/pptx/lake-breeze-hotel-shugandha-beach-coxs-bazar.png",
    title: "Lake Breeze Hotel, Shugandha Beach, Cox's Bazar",
    category: "Commercial",
    description: "A proposed Shugandha Beach hotel project designed for resort-style accommodation and coastal visibility.",
  },
  {
    src: "/projects/pptx/rammed-earth-mosque-naikhongchari.jpeg",
    title: "Rammed Earth Mosque at Naikhongchari",
    category: "Others",
    description: "A proposed Bandarban mosque project planned around a grounded, low-rise community prayer space.",
  },
  {
    src: "/projects/pptx/mosque-hub.png",
    title: "Mosque Hub",
    category: "Others",
    description: "A proposed campus mosque project in Meghna designed for community worship and institutional use.",
  },
  {
    src: "/projects/pptx/bogura-army-auditorium.png",
    title: "Bogura Army Auditorium",
    category: "Others",
    description: "A proposed cantonment auditorium project planned for ceremonial, cultural, and gathering functions.",
  },
  {
    src: "/projects/pptx/biam-resource-center-sajek-valley.jpeg",
    title: "BIAM Resource Center, Sajek Valley",
    category: "Others",
    description: "A proposed Sajek Valley resource center designed for group stays, learning, and retreat use.",
  },
  {
    src: "/projects/pptx/monoshanti-wellness-retreat.png",
    title: "Monoshanti Wellness Retreat",
    category: "Commercial",
    description: "A built wellness retreat in Teknaf planned for restorative stays within a destination-focused hospitality setting.",
  },
  {
    src: "/projects/pptx/high-landers-park-resort.png",
    title: "High Landers Park & Resort",
    category: "Commercial",
    description: "A large Bandarban resort project planned for destination leisure and long-term tourism use.",
  },
  {
    src: "/projects/pptx/sheikh-hasina-community-clinic-training-institute.png",
    title: "Sheikh Hasina Community Clinic Trust & International Training Institute",
    category: "Others",
    description: "An under-construction Mohakhali healthcare and training project planned at significant institutional scale.",
  },
];

export const projects: Project[] = [...projectEntries].sort((left, right) => {
  const categoryDifference = projectSortOrder[left.category] - projectSortOrder[right.category];

  if (categoryDifference !== 0) {
    return categoryDifference;
  }

  return projectTitleCollator.compare(left.title, right.title);
});

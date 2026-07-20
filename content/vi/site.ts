// CONTENT VERIFICATION REQUIRED: Verify all business claims and license numbers before production release.

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  problem: string;
  description: string;
  scope: string[];
  deliverables: string[];
  tags: string[];
}

export interface ProductItem {
  name: string;
  note: string;
}

export interface ProductSubGroup {
  name: string;
  items: ProductItem[];
}

export interface ProductGroup {
  id: string;
  code: string;
  partner: string;
  title: string;
  description: string;
  subgroups: ProductSubGroup[];
}

export interface CaseStudyItem {
  id: string;
  code: string;
  sector: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  techs: string[];
  isVerified: boolean;
}

export interface FAQItem {
  id: string;
  num: string;
  question: string;
  answer: string;
}

export const siteContentVi = {
  brand: {
    name: 'Sao Mộc',
    englishName: 'Jupiter Solutions',
    fullName: 'Sao Mộc · Jupiter Solutions Technology',
    tagline: 'Quỹ đạo của đổi mới.',
    license: 'Đăng ký kinh doanh số 0109876543', // CONTENT VERIFICATION REQUIRED: Confirm registration code
    address: 'Tầng 12, Toà nhà Sao Mộc, 88 Đại Cồ Việt, Hai Bà Trưng, Hà Nội, Việt Nam',
    phone: '(+84) 326.813.947',
    email: 'info@jupiter-ai.pro',
  },
  
  home: {
    hero: {
      eyebrow: 'ENTERPRISE TECHNOLOGY SYSTEMS',
      headline: 'Đưa doanh nghiệp vào quỹ đạo công nghệ.',
      description: 'Chúng tôi thiết kế, xây dựng và vận hành các hệ thống AI, phần mềm, dữ liệu và hạ tầng cloud có khả năng mở rộng cùng doanh nghiệp.',
      ctaPrimary: 'Trao đổi dự án',
      ctaSecondary: 'Khám phá năng lực',
      credibilityPill: 'AI · SOFTWARE · CLOUD · DATA · SECURITY',
      stats: [
        { value: '60+', label: 'Kỹ sư & chuyên gia', sub: 'Engineers, architects and specialists' },
        { value: '4', label: 'Thị trường phục vụ', sub: 'Markets served across ASEAN' },
        { value: '24/7', label: 'Vận hành liên tục', sub: 'Monitoring & emergency response' },
        { value: '3', label: 'Văn phòng khu vực', sub: 'Regional presence & PoC labs' }
      ]
    },
    challengesHead: {
      eyebrow: 'BẢN CHẤT BÀI TOÁN DOANH NGHIỆP',
      title: 'Công nghệ không nên trở thành một hệ thống rời rạc.',
      description: 'Khi các công cụ công nghệ không gắn kết, doanh nghiệp tiêu tốn chi phí nhưng không đạt được tốc độ vận hành kỳ vọng.',
      transition: 'Jupiter Solution thiết kế một hệ thống thống nhất từ chiến lược đến vận hành.'
    },
    challenges: [
      { id: 'c1', code: '01', title: 'Dữ liệu phân mảnh', desc: 'Dữ liệu nằm trong nhiều hệ thống không kết nối, thiếu góc nhìn toàn cảnh cho lãnh đạo.' },
      { id: 'c2', code: '02', title: 'Quy trình thủ công', desc: 'Nghiệp vụ phụ thuộc nhiều vào thao tác con người, dễ phát sinh lỗi và nghẽn tiến độ.' },
      { id: 'c3', code: '03', title: 'AI thử nghiệm rời rạc', desc: 'Thử nghiệm AI nhưng chưa tạo ra giá trị vận hành thực tế và lo ngại bảo mật dữ liệu.' },
      { id: 'c4', code: '04', title: 'Hạ tầng khó mở rộng', desc: 'Hạ tầng Cloud/On-premise cũ thiếu khả năng quan sát và chi phí gia tăng không kiểm soát.' },
      { id: 'c5', code: '05', title: 'Phần mềm cũ cản trở', desc: 'Các hệ thống legacy cồng kềnh làm chậm tốc độ đưa sản phẩm mới ra thị trường.' },
      { id: 'c6', code: '06', title: 'Bảo mật bổ sung muộn', desc: 'An ninh mạng chỉ được chú trọng sau khi sự cố xảy ra thay vì thiết kế Zero Trust ngay từ đầu.' }
    ],
    servicePillarsHead: {
      eyebrow: 'KIẾN TRÚC HỆ THỐNG',
      title: 'Ba trục năng lực cốt lõi kéo doanh nghiệp tiến xa',
      description: 'Chúng tôi cấu trúc dịch vụ thành 3 khối gắn kết chặt chẽ: Phát triển (Build), Trí tuệ (Intelligence) và Vận hành (Operate).'
    },
    servicePillars: [
      {
        id: 'build',
        code: 'BUILD',
        title: 'Phát triển & Tích hợp (Build)',
        description: 'Xây dựng các hệ thống phần mềm doanh nghiệp và nền tảng cốt lõi được đo ni đóng giày.',
        capabilities: ['Enterprise Software', 'Product Engineering', 'System Integration & APIs'],
        outcome: 'Rút ngắn 40% thời gian đưa nghiệp vụ mới vào vận hành.'
      },
      {
        id: 'intelligence',
        code: 'INTELLIGENCE',
        title: 'Trí tuệ & Dữ liệu (Intelligence)',
        description: 'Đưa AI từ thử nghiệm vào quy trình vận hành thực tế trên tập dữ liệu riêng bảo mật.',
        capabilities: ['Enterprise RAG', 'AI Agents & Automation', 'Data Pipeline & Governance'],
        outcome: 'Khai thác tối đa kho tri thức nội bộ và tự động hóa tác vụ chuyên sâu.'
      },
      {
        id: 'operate',
        code: 'OPERATE',
        title: 'Hạ tầng & Vận hành (Operate)',
        description: 'Đảm bảo sự ổn định, an toàn thông tin và hiệu năng liên tục 24/7 cho toàn bộ hạ tầng.',
        capabilities: ['Cloud & Hybrid Infrastructure', 'DevOps & SRE Automation', 'Zero Trust SOC & Managed NOC'],
        outcome: 'Cam kết SLA 99.99% uptime và ứng phó sự cố khẩn cấp.'
      }
    ],
    securityHead: {
      eyebrow: 'TỰ PHỤC HỒI & AN TOÀN BẢO MẬT',
      title: 'Nguyên tắc vận hành an ninh cho hệ thống lớn',
      description: 'Chúng tôi thiết kế an ninh mạng như một điều kiện tiên quyết trong mọi kiến trúc hệ thống.'
    },
    securityPrinciples: [
      { num: '01', title: 'Security by Design', desc: 'Tích hợp chính sách an toàn thông tin vào từng dòng mã nguồn và cấu hình hạ tầng.' },
      { num: '02', title: 'Zero Trust Access Control', desc: 'Xác thực đa yếu tố và phân quyền đặc quyền tối thiểu (Least Privilege) cho mọi kết nối.' },
      { num: '03', title: 'Data Isolation', desc: 'Mã hóa dữ liệu tại chỗ (At Rest) và trên đường truyền (In Transit) với khóa riêng của khách hàng.' },
      { num: '04', title: 'Deployment Governance', desc: 'Quy trình CI/CD kiểm thử an ninh tự động trước khi đưa sản phẩm lên môi trường Production.' },
      { num: '05', title: 'Full System Observability', desc: 'Giám sát tập trung log sự kiện (SIEM) và cảnh báo bất thường thời gian thực.' },
      { num: '06', title: 'Documentation & Handover', desc: 'Bàn giao 100% tài liệu kiến trúc, mã nguồn và quy trình khôi phục thảm họa (DRP).' }
    ],
    servicesHead: {
      eyebrow: 'Dịch vụ chiến lược',
      title: 'Các dịch vụ công nghệ đầu cuối cho doanh nghiệp',
      description: 'Chúng tôi cung cấp các giải pháp công nghệ trọn vòng đời từ tư vấn kiến trúc, triển khai phần mềm cho đến bảo mật và vận hành hạ tầng mạng.'
    },
    capabilitiesHead: {
      eyebrow: 'TÔN CHỈ SAO MỘC',
      title: 'Build quietly. Ship reliably.',
      description: 'Chúng tôi tin rằng công nghệ tốt nhất là công nghệ biết khiêm tốn — phục vụ con người, vận hành lặng lẽ, và làm bệ đỡ vững chắc để khách hàng tỏa sáng.'
    },
    processHead: {
      eyebrow: 'PHƯƠNG PHÁP TRIỂN KHAI',
      title: 'Lộ trình 5 bước đưa hệ thống vào vận hành',
      description: 'Đảm bảo sự minh bạch về tiến độ, chất lượng kỹ thuật và tối ưu hóa ngân sách trong suốt vòng đời dự án.'
    },
    processSteps: [
      { num: '01', title: 'Khảo sát (Discover)', desc: 'Lắng nghe nhu cầu thực tế, khảo sát hiện trạng hạ tầng và xác định bài toán kinh doanh.' },
      { num: '02', title: 'Kiến trúc (Architect)', desc: 'Thiết kế kiến trúc hệ thống, dữ liệu, bảo mật và cam kết mốc thời gian thương mại.' },
      { num: '03', title: 'Phát triển (Build)', desc: 'Lập trình và tích hợp theo từng giai đoạn (Scrum) có thể kiểm chứng hai tuần một lần.' },
      { num: '04', title: 'Tích hợp (Integrate)', desc: 'Kết nối hệ thống, dữ liệu nghiệp vụ và đào tạo chuyển giao cho đội ngũ in-house.' },
      { num: '05', title: 'Vận hành (Operate)', desc: 'Giám sát NOC/SOC 24/7, bảo trì chủ động và tối ưu hóa hiệu năng hệ thống liên tục.' }
    ]
  },

  services: {
    list: [
      {
        id: 'tech-solutions',
        num: '01',
        title: 'Giải pháp Công nghệ',
        problem: 'Các doanh nghiệp gặp khó khăn khi tìm kiếm phần mềm được thiết kế tối ưu riêng cho các nghiệp vụ đặc thù.',
        description: 'Thiết kế và phát triển nền tảng phần mềm doanh nghiệp được đo ni đóng giày — từ web portal, ứng dụng nội bộ, đến hệ thống ERP/CRM phức tạp.',
        scope: ['Phát triển ứng dụng Web & Mobile', 'Xây dựng hệ thống Core Business', 'Thiết kế hệ thống API & Microservices Integration'],
        deliverables: ['Mã nguồn phần mềm bàn giao hoàn chỉnh', 'Tài liệu API & Hướng dẫn kỹ thuật', 'Hệ thống kiểm thử tự động'],
        tags: ['Web Platform', 'ERP / CRM', 'Mobile', 'API System']
      },
      {
        id: 'digital-transformation',
        num: '02',
        title: 'Chuyển đổi số',
        problem: 'Dữ liệu rời rạc và quy trình thủ công làm giảm hiệu suất vận hành của doanh nghiệp lớn.',
        description: 'Đồng hành cùng đội ngũ lãnh đạo lập lộ trình chuyển đổi số, số hóa quy trình và kết nối dữ liệu để đo lường hiệu quả thời gian thực.',
        scope: ['Tư vấn lộ trình chuyển đổi số', 'Số hóa quy trình làm việc liên phòng ban', 'Hợp nhất và phân tích kho dữ liệu rời rạc'],
        deliverables: ['Bản đồ kiến trúc số doanh nghiệp', 'Báo cáo trực quan hóa KPI thời gian thực', 'Quy trình vận hành số chuẩn hóa'],
        tags: ['Strategy', 'Data Unification', 'Process Redesign', 'KPI Dashboard']
      },
      {
        id: 'applied-ai',
        num: '03',
        title: 'Dịch vụ AI ứng dụng',
        problem: 'Doanh nghiệp muốn ứng dụng AI vào vận hành thực tế nhưng lo ngại vấn đề bảo mật dữ liệu và hiệu quả đầu tư (ROI).',
        description: 'Triển khai mô hình AI chuyên biệt, RAG và tác tử AI thông minh trên tập dữ liệu riêng của doanh nghiệp, cam kết bảo mật tuyệt đối.',
        scope: ['Xây dựng pipeline RAG trên dữ liệu nội bộ', 'Triển khai AI Agent hỗ trợ tác vụ vận hành', 'Tích hợp các mô hình Computer Vision'],
        deliverables: ['Mô hình AI đã tinh chỉnh (Fine-tuned LLM)', 'Hạ tầng kiểm soát an toàn dữ liệu AI', 'Báo cáo đo lường ROI ứng dụng'],
        tags: ['LLM Pipeline', 'RAG Security', 'Computer Vision', 'AI Agents']
      },
      {
        id: 'cloud-infrastructure',
        num: '04',
        title: 'Tích hợp & Hạ tầng Cloud',
        problem: 'Vận hành hệ thống lai (hybrid) phức tạp, thiếu các quy trình tự động hóa (DevOps) và tối ưu hóa chi phí đám mây.',
        description: 'Thiết kế, xây dựng và đưa nghiệp vụ lên nền tảng đám mây an toàn, tối ưu hóa DevOps và đảm bảo an toàn thông tin.',
        scope: ['Tư vấn kiến trúc Hybrid Cloud & Multi-Cloud', 'Xây dựng đường ống CI/CD & DevOps tự động', 'Tối ưu hóa chi phí hạ tầng Cloud'],
        deliverables: ['Bản vẽ kiến trúc hạ tầng Cloud đích', 'Mã nguồn cấu hình hạ tầng (Terraform IaC)', 'Hệ thống CI/CD hoạt động tự động'],
        tags: ['AWS / GCP / Azure', 'DevOps CI/CD', 'System Integration', 'Cloud Security']
      },
      {
        id: 'networking-security',
        num: '05',
        title: 'Hạ tầng mạng & Bảo mật',
        problem: 'Hạ tầng mạng lõi thiếu an toàn trước các cuộc tấn công mạng ngày càng phức tạp.',
        description: 'Tích hợp và bảo mật hệ thống mạng lõi doanh nghiệp với thiết bị Juniper Networks, tường lửa thế hệ mới (NGFW) và giải pháp SD-WAN.',
        scope: ['Thiết kế hệ thống mạng doanh nghiệp lớn', 'Triển khai tường lửa Juniper SRX Series', 'Tích hợp giải pháp mạng SD-WAN bảo mật'],
        deliverables: ['Bản vẽ chi tiết thiết kế mạng lõi', 'Cấu hình thiết bị an ninh chuẩn hóa', 'Chính sách kiểm soát truy cập phân vùng'],
        tags: ['Juniper SRX', 'Core Switches', 'SD-WAN', 'NGFW']
      },
      {
        id: 'modern-datacenter',
        num: '06',
        title: 'Trung tâm dữ liệu hiện đại',
        problem: 'Máy chủ cũ hiệu năng kém, chi phí mở rộng lớn và thời gian downtime cao.',
        description: 'Hiện đại hóa trung tâm dữ liệu on-premise với máy chủ HPE, lưu trữ flash hiệu năng cao, ảo hóa VMware vSphere và hạ tầng siêu hội tụ (HCI).',
        scope: ['Triển khai máy chủ HPE ProLiant & HPE Nimble', 'Thiết lập hạ tầng siêu hội tụ VMware vSAN', 'Ảo hóa máy chủ doanh nghiệp'],
        deliverables: ['Hạ tầng ảo hóa DC sẵn sàng vận hành', 'Quy trình sao lưu & khôi phục thảm họa (DR)', 'Bản vẽ cấu hình thiết bị lưu trữ'],
        tags: ['HPE Servers', '3PAR / Nimble', 'VMware vSAN', 'HCI']
      },
      {
        id: 'cybersecurity-soc',
        num: '07',
        title: 'An ninh mạng (SOC)',
        problem: 'Thiếu nhân sự và công cụ giám sát các sự kiện an ninh thông tin liên tục 24/7.',
        description: 'Giám sát, phát hiện và phản ứng sự cố an ninh 24/7 với Splunk SIEM, kiểm soát thiết bị ForeScout và quản lý quyền đặc quyền BeyondTrust.',
        scope: ['Xây dựng SOC với Splunk Enterprise & SOAR', 'Kiểm soát truy cập đặc quyền BeyondTrust', 'Giám sát thiết bị IoT/OT với ForeScout'],
        deliverables: ['Hệ thống giám sát sự kiện an ninh (SIEM)', 'Kịch bản tự động phản ứng sự cố (SOAR playbooks)', 'Quy trình kiểm soát đặc quyền an toàn'],
        tags: ['Splunk SIEM', 'ForeScout IoT', 'BeyondTrust PAM', 'Zero Trust']
      },
      {
        id: 'managed-operations',
        num: '08',
        title: 'Vận hành & Bảo trì',
        problem: 'Chi phí duy trì đội ngũ NOC nội bộ quá lớn và khó đáp ứng SLA xử lý sự cố nhanh.',
        description: 'Dịch vụ vận hành ủy thác (managed services), bảo trì ATM và hạ tầng công nghệ thông tin toàn quốc với cam kết SLA chặt chẽ và NOC 24/7.',
        scope: ['Giám sát NOC 24/7 chủ động', 'Bảo trì ATM và phần cứng thiết bị chi nhánh', 'Hỗ trợ kỹ thuật onsite & ticket xử lý lỗi'],
        deliverables: ['Báo cáo SLA vận hành hàng tháng', 'Hệ thống ticket theo dõi lỗi', 'Biên bản bảo trì định kỳ'],
        tags: ['Managed Services', 'ATM Maintenance', 'NOC 24/7 Support', 'SLA Contract']
      }
    ] as ServiceItem[]
  },

  products: {
    intro: 'Sao Mộc là đối tác tích hợp và triển khai hệ thống chính hãng từ các nhà cung cấp công nghệ hàng đầu thế giới. Chúng tôi mang đến các giải pháp phần cứng và ảo hóa tối ưu, giúp hạ tầng doanh nghiệp vận hành ổn định.',
    list: [
      {
        id: 'juniper-networking',
        code: 'NET',
        partner: 'Juniper Networks Partner',
        title: 'Hạ tầng mạng Juniper Networks',
        description: 'Các giải pháp định tuyến, switch truy cập và tường lửa bảo mật thế hệ mới SRX Series cho mạng doanh nghiệp lớn.',
        subgroups: [
          {
            name: 'Tường lửa thế hệ mới (NGFW)',
            items: [
              { name: 'SRX 5800', note: 'Tường lửa Core & Data Center hiệu năng cực cao' },
              { name: 'SRX 4600', note: 'Thiết bị bảo mật NGFW và tích hợp SD-WAN, kích thước 1U' },
              { name: 'SRX Series', note: 'Tường lửa bảo mật biên cho chi nhánh doanh nghiệp' }
            ]
          },
          {
            name: 'Switch & Router',
            items: [
              { name: 'EX Series', note: 'Switch truy cập doanh nghiệp hiệu năng ổn định' },
              { name: 'QFX Series', note: 'Switch Data Center mật độ cao, độ trễ cực thấp' },
              { name: 'MX Series Routers', note: 'Định tuyến biên doanh nghiệp & nhà mạng lớn' }
            ]
          }
        ]
      },
      {
        id: 'hpe-vmware-systems',
        code: 'SYS',
        partner: 'HPE · VMware Partner',
        title: 'Hệ thống Lưu trữ & Ảo hóa',
        description: 'Hạ tầng máy chủ tin cậy và phần mềm ảo hóa siêu hội tụ, sẵn sàng cho đám mây lai (Hybrid Cloud).',
        subgroups: [
          {
            name: 'Lưu trữ & Máy chủ HPE',
            items: [
              { name: 'HPE 3PAR StoreServ', note: 'Hệ thống lưu trữ All-Flash độ trễ dưới 1 mili-giây' },
              { name: 'HPE Nimble Storage', note: 'Hệ thống lưu trữ thông minh tích hợp AI InfoSight, uptime 99.9999%' },
              { name: 'HPE ProLiant Servers', note: 'Dòng máy chủ doanh nghiệp phổ biến nhất thế giới' }
            ]
          },
          {
            name: 'Ảo hóa VMware',
            items: [
              { name: 'VMware vSAN', note: 'Phần mềm xây dựng hạ tầng siêu hội tụ (HCI)' },
              { name: 'VMware vSphere', note: 'Nền tảng ảo hóa máy chủ doanh nghiệp hàng đầu' }
            ]
          }
        ]
      },
      {
        id: 'security-solutions',
        code: 'SEC',
        partner: 'Splunk · BeyondTrust · ForeScout',
        title: 'Giải pháp Giám sát & An ninh',
        description: 'Nền tảng phân tích sự kiện an toàn thông tin và quản trị truy cập đặc quyền.',
        subgroups: [
          {
            name: 'Phân tích & Giám sát Splunk',
            items: [
              { name: 'Splunk Enterprise', note: 'Thu thập và phân tích log sự kiện ở quy mô lớn' },
              { name: 'Splunk SOAR', note: 'Tự động hóa và chuẩn hóa quy trình phản ứng sự cố' },
              { name: 'Splunk ITSI', note: 'Giám sát và chẩn đoán dịch vụ CNTT thông minh' }
            ]
          },
          {
            name: 'Quản trị truy cập & Thiết bị',
            items: [
              { name: 'BeyondTrust PAM', note: 'Quản lý mật khẩu đặc quyền và phiên truy cập từ xa an toàn' },
              { name: 'ForeScout CounterACT', note: 'Khám phá và kiểm soát an ninh thiết bị kết nối IoT/OT' }
            ]
          }
        ]
      }
    ] as ProductGroup[]
  },

  capabilities: {
    intro: 'Chúng tôi xây dựng năng lực dựa trên chiều sâu kỹ thuật, quy trình nghiêm ngặt và đội ngũ kỹ sư có chứng chỉ quốc tế được đào tạo chính hãng.',
    // CONTENT VERIFICATION REQUIRED: Verify certified engineer counts
    certs: [
      { code: 'AWS', title: 'AWS Certified Solutions Architect', count: '12 kỹ sư' },
      { code: 'AZURE', title: 'Microsoft Azure Architect', count: '8 kỹ sư' },
      { code: 'GCP', title: 'Google Cloud Architect Certification', count: '6 kỹ sư' },
      { code: 'JUNIPER', title: 'Juniper Networks JNCIE / JNCIP Certifications', count: '9 kỹ sư' },
      { code: 'VMWARE', title: 'VMware VCP-DCV Certification', count: '11 kỹ sư' },
      { code: 'SPLUNK', title: 'Splunk Certified Architect', count: '5 kỹ sư' },
      { code: 'CISSP', title: 'CISSP & CISM Security Specialist', count: '7 kỹ sư' }
    ],
    // CONTENT VERIFICATION REQUIRED: Verify staff ratios
    ratios: [
      { percent: '32%', title: 'Kỹ sư phần mềm', desc: 'Phát triển backend, frontend, mobile và ứng dụng web.' },
      { percent: '18%', title: 'Kỹ sư hạ tầng', desc: 'Chuyên gia DevOps, Cloud, quản trị hệ thống mạng và an toàn thông tin.' },
      { percent: '15%', title: 'Kỹ sư dữ liệu & AI', desc: 'Xây dựng data pipeline, MLOps và tích hợp mô hình dữ liệu lớn.' },
      { percent: '12%', title: 'Thiết kế & Nghiên cứu', desc: 'Nghiên cứu trải nghiệm người dùng, thiết kế giao diện doanh nghiệp.' },
      { percent: '13%', title: 'Quản lý dự án (PM)', desc: 'Scrum master, quản trị tiến độ và đảm bảo cam kết chất lượng giao nhận.' },
      { percent: '10%', title: 'Kỹ sư giải pháp & Tư vấn', desc: 'Solution architect hỗ trợ khảo sát và tư vấn lộ trình tiền khả thi.' }
    ]
  },

  caseStudies: {
    list: [
      {
        id: 'case-corebanking',
        code: 'CASE.01',
        sector: 'Ngân hàng TMCP', // CONTENT VERIFICATION REQUIRED: Real customer name
        title: 'Hiện đại hóa trung tâm dữ liệu Core Banking',
        challenge: 'Hạ tầng lưu trữ cũ gặp nghẽn I/O vào giờ cao điểm, ảnh hưởng tới trải nghiệm giao dịch và thời gian chạy báo cáo cuối ngày.',
        solution: 'Triển khai giải pháp lưu trữ HPE 3PAR All-Flash kết hợp ảo hóa VMware vSAN, chuyển đổi cấu trúc sang hạ tầng siêu hội tụ (HCI).',
        result: 'Giảm 62% thời gian phản hồi I/O, tăng gấp 3 lần mật độ máy chủ ảo trên cùng một diện tích tủ rack, đảm bảo uptime 99.99%.',
        techs: ['HPE 3PAR', 'VMware vSAN', 'HCI'],
        isVerified: false
      },
      {
        id: 'case-ot-monitoring',
        code: 'CASE.02',
        sector: 'Tập đoàn năng lượng', // CONTENT VERIFICATION REQUIRED: Real customer name
        title: 'Giám sát an ninh thiết bị công nghiệp OT',
        challenge: 'Hệ thống vận hành sản xuất (OT) chứa hàng ngàn thiết bị không đồng nhất, thiếu khả năng giám sát tập trung và có rủi ro rò rỉ mã độc.',
        solution: 'Triển khai giải pháp ForeScout CounterACT kết hợp eyeInspect phân vùng mạng sản xuất theo chuẩn Purdue Model và tích hợp SIEM Splunk.',
        result: 'Nhận diện tự động 100% trong số hơn 18.000 thiết bị kết nối, thiết lập các cảnh báo rủi ro an ninh thời gian thực.',
        techs: ['ForeScout', 'Splunk SIEM', 'Purdue Model'],
        isVerified: false
      },
      {
        id: 'case-soc-operations',
        code: 'CASE.03',
        sector: 'Công ty chứng khoán', // CONTENT VERIFICATION REQUIRED: Real customer name
        title: 'Xây dựng trung tâm SOC & Quản lý đặc quyền',
        challenge: 'Cần tuân thủ quy chuẩn kiểm toán an ninh khắt khe của ngành chứng khoán và kiểm soát các truy cập hệ thống từ xa của bên thứ ba.',
        solution: 'Thiết lập trung tâm giám sát an ninh (SOC) bằng Splunk Enterprise + SOAR, tích hợp BeyondTrust PAM quản lý mật khẩu đặc quyền.',
        result: 'Đạt chuẩn kiểm toán an ninh ngành, tự động chặn 98% hành động truy cập bất thường và ghi vết 100% phiên làm việc của admin.',
        techs: ['Splunk SOAR', 'BeyondTrust PAM', 'NOC/SOC'],
        isVerified: false
      }
    ] as CaseStudyItem[]
  },

  faq: {
    list: [
      {
        id: 'faq-differentiation',
        num: '01',
        question: 'Sao Mộc khác biệt thế nào với các đơn vị tích hợp hệ thống khác?',
        answer: 'Chúng tôi không chỉ tích hợp thiết bị phần cứng — chúng tôi có năng lực tự phát triển phần mềm và tối ưu thuật toán AI. Một dự án của Sao Mộc thường kết hợp đồng bộ từ hạ tầng mạng lõi, máy chủ ảo hóa cho tới lớp ứng dụng nghiệp vụ.'
      },
      {
        id: 'faq-pricing',
        num: '02',
        question: 'Phương thức tính chi phí dự án tại Sao Mộc như thế nào?',
        answer: 'Tùy theo mức độ xác định rõ ràng của bài toán: Chúng tôi hỗ trợ mô hình Dự án giá cố định (Fixed price) khi phạm vi công việc đã rõ; hoặc mô hình Đội ngũ chuyên trách (Dedicated team) thuê theo sprint 2 tuần đối với các dự án phát triển linh hoạt.'
      },
      {
        id: 'faq-security',
        num: '03',
        question: 'Dữ liệu doanh nghiệp của tôi được bảo mật như thế nào?',
        answer: 'Toàn bộ kỹ sư ký NDA ràng buộc cá nhân. Dữ liệu nghiệp vụ chỉ được xử lý trực tiếp trên máy chủ do khách hàng sở hữu và quản trị. Chúng tôi vận hành theo các tiêu chuẩn thực hành kiểm soát an toàn thông tin ISO 27001.'
      },
      {
        id: 'faq-exit-strategy',
        num: '04',
        question: 'Nếu dự án phát triển không đạt kỳ vọng thì sao?',
        answer: 'Chúng tôi cam kết chính sách checkpoint sau 30 ngày làm việc đầu tiên. Nếu khách hàng đánh giá không đạt, hợp đồng có thể dừng và chỉ thanh toán phần việc đã hoàn tất nghiệm thu, hoàn toàn không phạt vi phạm.'
      }
    ] as FAQItem[]
  }
};

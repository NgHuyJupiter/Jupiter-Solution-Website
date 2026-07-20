import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import Typography from '@/components/ui/typography';
import { getPageMetadata } from '@/lib/metadata/metadata-utils';
import { Metadata } from 'next';

interface PageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isEn = params.locale === 'en';
  return getPageMetadata({
    title: isEn ? 'Data Security & Confidentiality Policy' : 'Chính sách Bảo mật & An toàn Dữ liệu',
    description: isEn
      ? 'Understand our strict parameters for managing client source codes, NDA agreements, and infrastructure logs.'
      : 'Tìm hiểu về quy trình bảo mật mã nguồn dự án, thỏa thuận NDA và nhật ký hạ tầng hệ thống tại Sao Mộc.',
    path: '/privacy',
    locale: params.locale,
  });
}

export default function PrivacyPage({ params }: PageProps) {
  const isEn = params.locale === 'en';

  return (
    <div className="flex flex-col w-full bg-[#100E0F] text-text-primary">
      <Section variant="alternate" className="py-12 border-b border-white/[0.09] bg-[#1C181A]">
        <Container>
          <span className="eyebrow mb-3 block">
            {isEn ? 'Data Confidentiality' : 'Chính sách bảo mật'}
          </span>
          <Typography variant="h1" className="mt-2 mb-3 text-text-primary">
            {isEn ? 'Information Security & Data Protection Policy' : 'Chính sách An toàn Thông tin & Bảo mật Dữ liệu'}
          </Typography>
        </Container>
      </Section>

      <Section variant="default" className="py-16 bg-[#100E0F]">
        <Container className="max-w-3xl">
          <div className="prose prose-invert max-w-none text-sm leading-relaxed space-y-6 text-text-secondary">
            {isEn ? (
              <>
                <Typography variant="h3" className="text-text-primary font-semibold">1. Confidentiality Framework (NDA)</Typography>
                <p>
                  All project inquiries, source codes, infrastructure blueprints, and database structures shared with Sao Mộc are protected under binding Non-Disclosure Agreements (NDAs).
                </p>
                
                <Typography variant="h3" className="text-text-primary font-semibold">2. Production Environment Access</Typography>
                <p>
                  Our engineers only access client production environments through secure, encrypted gateways hosted and audited directly by the client. We enforce a zero-copy policy for internal workstation terminals.
                </p>

                <Typography variant="h3" className="text-text-primary font-semibold">3. Compliance Standards</Typography>
                <p>
                  Sao Mộc aligns its security operations with ISO 27001 recommendations and standard Zero Trust networking rules to ensure data privacy.
                </p>
              </>
            ) : (
              <>
                <Typography variant="h3" className="text-text-primary font-semibold">1. Cam kết bảo mật thông tin (NDA)</Typography>
                <p>
                  Tất cả các tài liệu thiết kế mạng, mã nguồn phần mềm, cấu trúc dữ liệu và log nghiệp vụ do khách hàng cung cấp đều được bảo vệ nghiêm ngặt dưới thỏa thuận NDA pháp lý.
                </p>

                <Typography variant="h3" className="text-text-primary font-semibold">2. Nguyên tắc tiếp cận môi trường sản xuất</Typography>
                <p>
                  Kỹ sư Sao Mộc chỉ tiếp cận môi trường Production của khách hàng thông qua kênh mã hóa do khách hàng cấp quyền và giám sát. Tuyệt đối không sao chép dữ liệu thật về các máy trạm cá nhân.
                </p>

                <Typography variant="h3" className="text-text-primary font-semibold">3. Tiêu chuẩn tuân thủ an toàn</Typography>
                <p>
                  Quy trình vận hành, lưu trữ dữ liệu dự án tại Sao Mộc tuân thủ chặt chẽ các chỉ dẫn thực hành tốt nhất về an toàn thông tin ISO/IEC 27001:2022.
                </p>
              </>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
}

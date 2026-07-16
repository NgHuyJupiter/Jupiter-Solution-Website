'use client';

import * as React from 'react';
import Button from '../ui/button';

interface ContactFormProps {
  locale: string;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Giải pháp công nghệ',
    budget: 'Dưới 500 triệu',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  // Translation text matching B2B content guide
  const text = locale === 'vi' ? {
    formTitle: 'Gửi yêu cầu tư vấn',
    formSub: 'Điền thông tin bên dưới — đội ngũ kinh doanh sẽ phản hồi trong vòng 1 ngày làm việc.',
    labelName: 'Họ và tên',
    labelCompany: 'Công ty / Tổ chức',
    labelEmail: 'Email công việc',
    labelPhone: 'Số điện thoại',
    labelService: 'Quan tâm về dịch vụ',
    labelBudget: 'Ngân sách dự kiến',
    labelMessage: 'Mô tả nhu cầu của bạn',
    placeholderMessage: 'Bài toán đang gặp phải, kết quả mong đợi, mốc thời gian quan trọng…',
    labelConsent: 'Tôi đồng ý để Sao Mộc liên hệ về yêu cầu này. Thông tin được bảo mật theo chính sách của công ty.',
    btnSubmit: 'Gửi yêu cầu',
    errName: 'Vui lòng nhập họ và tên',
    errCompany: 'Vui lòng nhập tên công ty',
    errEmail: 'Vui lòng nhập email công việc hợp lệ',
    errMessage: 'Vui lòng nhập mô tả nhu cầu',
    errConsent: 'Bạn cần đồng ý với chính sách bảo mật để tiếp tục',
    successMsg: 'Cảm ơn bạn! Yêu cầu đã được gửi thành công. Chúng tôi sẽ liên hệ lại trong vòng 1 ngày làm việc.',
    errorMsg: 'Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua hotline.',
  } : {
    formTitle: 'Submit Consultation Request',
    formSub: 'Fill in the details below — our sales team will respond within 1 business day.',
    labelName: 'Full Name',
    labelCompany: 'Company / Organization',
    labelEmail: 'Work Email',
    labelPhone: 'Phone Number',
    labelService: 'Interested Service',
    labelBudget: 'Estimated Budget',
    labelMessage: 'Describe your requirement',
    placeholderMessage: 'The problem you are facing, expected outcomes, key milestones...',
    labelConsent: 'I agree to let Sao Mộc contact me regarding this request. Data is secured under company policy.',
    btnSubmit: 'Submit Request',
    errName: 'Please enter your full name',
    errCompany: 'Please enter your company name',
    errEmail: 'Please enter a valid work email',
    errMessage: 'Please enter your requirements',
    errConsent: 'You must agree to the privacy policy to continue',
    successMsg: 'Thank you! Your request has been successfully submitted. We will contact you within 1 business day.',
    errorMsg: 'An error occurred. Please try again later or contact us directly via phone.',
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = text.errName;
    if (!formData.company.trim()) tempErrors.company = text.errCompany;
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = text.errEmail;
    }
    if (!formData.message.trim()) tempErrors.message = text.errMessage;
    if (!formData.consent) tempErrors.consent = text.errConsent;

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API submit latency
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'Giải pháp công nghệ',
        budget: 'Dưới 500 triệu',
        message: '',
        consent: false,
      });
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
      <h3 className="text-xl font-bold text-text-primary mb-1">{text.formTitle}</h3>
      <p className="text-sm text-text-secondary mb-6">{text.formSub}</p>

      {submitStatus === 'success' && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-sm text-emerald-800"
        >
          {text.successMsg}
        </div>
      )}

      {submitStatus === 'error' && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-lg bg-rose-50 border border-rose-200 text-sm text-rose-800"
        >
          {text.errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Row 1: Name and Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="form-name" className="text-xs font-semibold text-text-primary">
              {text.labelName} <span className="text-brand-600" aria-hidden="true">*</span>
            </label>
            <input
              id="form-name"
              type="text"
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'error-name' : undefined}
              className={`h-11 px-3 text-sm rounded-sm border bg-white text-text-primary focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-colors ${
                errors.name ? 'border-rose-500' : 'border-slate-300 hover:border-slate-400'
              }`}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && (
              <span id="error-name" role="alert" className="text-[11px] font-medium text-rose-600 mt-0.5">
                {errors.name}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="form-company" className="text-xs font-semibold text-text-primary">
              {text.labelCompany} <span className="text-brand-600" aria-hidden="true">*</span>
            </label>
            <input
              id="form-company"
              type="text"
              required
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? 'error-company' : undefined}
              className={`h-11 px-3 text-sm rounded-sm border bg-white text-text-primary focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-colors ${
                errors.company ? 'border-rose-500' : 'border-slate-300 hover:border-slate-400'
              }`}
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
            {errors.company && (
              <span id="error-company" role="alert" className="text-[11px] font-medium text-rose-600 mt-0.5">
                {errors.company}
              </span>
            )}
          </div>
        </div>

        {/* Row 2: Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="form-email" className="text-xs font-semibold text-text-primary">
              {text.labelEmail} <span className="text-brand-600" aria-hidden="true">*</span>
            </label>
            <input
              id="form-email"
              type="email"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'error-email' : undefined}
              className={`h-11 px-3 text-sm rounded-sm border bg-white text-text-primary focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-colors ${
                errors.email ? 'border-rose-500' : 'border-slate-300 hover:border-slate-400'
              }`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && (
              <span id="error-email" role="alert" className="text-[11px] font-medium text-rose-600 mt-0.5">
                {errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="form-phone" className="text-xs font-semibold text-text-primary">
              {text.labelPhone}
            </label>
            <input
              id="form-phone"
              type="tel"
              className="h-11 px-3 text-sm rounded-sm border border-slate-300 hover:border-slate-400 bg-white text-text-primary focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-colors"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        {/* Row 3: Service and Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="form-service" className="text-xs font-semibold text-text-primary">
              {text.labelService}
            </label>
            <select
              id="form-service"
              className="h-11 px-3 text-sm rounded-sm border border-slate-300 hover:border-slate-400 bg-white text-text-primary focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-colors"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="Giải pháp công nghệ">{locale === 'vi' ? 'Giải pháp công nghệ' : 'Technology Solutions'}</option>
              <option value="Chuyển đổi số">{locale === 'vi' ? 'Chuyển đổi số' : 'Digital Transformation'}</option>
              <option value="Dịch vụ AI">{locale === 'vi' ? 'Dịch vụ AI' : 'Applied AI Services'}</option>
              <option value="Tích hợp &amp; Cloud">{locale === 'vi' ? 'Tích hợp &amp; Cloud' : 'Integration &amp; Cloud'}</option>
              <option value="Hạ tầng mạng &amp; Bảo mật">{locale === 'vi' ? 'Hạ tầng mạng &amp; Bảo mật' : 'Networking &amp; Security'}</option>
              <option value="Trung tâm dữ liệu">{locale === 'vi' ? 'Trung tâm dữ liệu' : 'Modern Data Center'}</option>
              <option value="An ninh mạng (SOC)">{locale === 'vi' ? 'An ninh mạng (SOC)' : 'Cybersecurity (SOC)'}</option>
              <option value="Vận hành &amp; Bảo trì">{locale === 'vi' ? 'Vận hành &amp; Bảo trì' : 'Operations &amp; Maintenance'}</option>
              <option value="Tư vấn / chưa rõ">{locale === 'vi' ? 'Tư vấn / chưa rõ' : 'General Consulting'}</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="form-budget" className="text-xs font-semibold text-text-primary">
              {text.labelBudget}
            </label>
            <select
              id="form-budget"
              className="h-11 px-3 text-sm rounded-sm border border-slate-300 hover:border-slate-400 bg-white text-text-primary focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-colors"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            >
              <option value="Dưới 500 triệu">{locale === 'vi' ? 'Dưới 500 triệu' : 'Under 500M VND'}</option>
              <option value="500 triệu – 2 tỷ">{locale === 'vi' ? '500 triệu – 2 tỷ' : '500M – 2B VND'}</option>
              <option value="2 – 10 tỷ">{locale === 'vi' ? '2 – 10 tỷ' : '2B – 10B VND'}</option>
              <option value="Trên 10 tỷ">{locale === 'vi' ? 'Trên 10 tỷ' : 'Over 10B VND'}</option>
              <option value="Chưa xác định">{locale === 'vi' ? 'Chưa xác định' : 'Undecided'}</option>
            </select>
          </div>
        </div>

        {/* Row 4: Message */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="form-message" className="text-xs font-semibold text-text-primary">
            {text.labelMessage} <span className="text-brand-600" aria-hidden="true">*</span>
          </label>
          <textarea
            id="form-message"
            required
            rows={5}
            placeholder={text.placeholderMessage}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'error-message' : undefined}
            className={`p-3 text-sm rounded-sm border bg-white text-text-primary focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-colors ${
              errors.message ? 'border-rose-500' : 'border-slate-300 hover:border-slate-400'
            }`}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && (
            <span id="error-message" role="alert" className="text-[11px] font-medium text-rose-600 mt-0.5">
              {errors.message}
            </span>
          )}
        </div>

        {/* Row 5: Privacy Consent */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-start gap-2.5">
            <input
              id="form-consent"
              type="checkbox"
              className="mt-1 h-4 w-4 rounded-sm border-slate-300 text-brand-600 focus:ring-brand-500 cursor-pointer"
              checked={formData.consent}
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? 'error-consent' : undefined}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            />
            <label htmlFor="form-consent" className="text-xs text-text-secondary cursor-pointer leading-relaxed">
              {text.labelConsent}
            </label>
          </div>
          {errors.consent && (
            <span id="error-consent" role="alert" className="text-[11px] font-medium text-rose-600">
              {errors.consent}
            </span>
          )}
        </div>

        {/* Submit Action */}
        <div className="pt-2">
          <Button
            type="submit"
            isLoading={isSubmitting}
            className="w-full bg-brand-600 hover:bg-brand-700 text-white rounded-md h-11"
          >
            {text.btnSubmit}
          </Button>
        </div>
      </form>
    </div>
  );
}

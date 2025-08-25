import EmailVerifyArea from "@/components/email-verify/email-verify-area";

export const metadata = {
  title: "Jo - Email Verify",
};

export default function EmailVerifyPage({ params }) {
  return (
    <>
      <EmailVerifyArea token={params.token} />
    </>
  );
}

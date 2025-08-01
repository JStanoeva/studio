import { ContactForm } from "@/components/contact-form";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

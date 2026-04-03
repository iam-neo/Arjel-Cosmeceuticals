export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-6">
      <div className="max-w-[600px] mx-auto bg-background p-10 rounded-3xl border border-border">
        <h1 className="font-[var(--font-playfair)] text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-text-secondary mb-8">We'd love to hear from you. Drop us a message.</p>
        <div className="flex flex-col gap-4">
          <input className="w-full p-4 border border-border rounded-xl bg-white" placeholder="Name" />
          <input className="w-full p-4 border border-border rounded-xl bg-white" placeholder="Email" />
          <textarea className="w-full p-4 border border-border rounded-xl bg-white min-h-[150px]" placeholder="Message"></textarea>
          <button className="w-full py-4 bg-foreground text-white rounded-xl font-bold">Send Message</button>
        </div>
      </div>
    </main>
  );
}

import Headernavbar from "@/components/Headernavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="px-10">
        <Headernavbar />
        {children}
        <p className="text-white">Footer</p>
      </main>
    </div>
  );
}

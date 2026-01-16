export default function ContractLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>tgis is contract layout</h1>
      <h1> {children}</h1>
    </div>
  );
}

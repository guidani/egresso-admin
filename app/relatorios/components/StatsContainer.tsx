type Props = {
  title: string;
  children: React.ReactNode;
};

export default function StatsContainer({ children, title }: Props) {
  return (
    <section className="">
      <h2 className="text-xl text-center">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">{children}</div>

    </section>
  );
}

const actions = [
  {
    label: "Products",
    url: "/admin/",
  },
  {
    label: "Purchases",
    url: "/admin/purchases/",
  },
  {
    label: "Users",
    url: "/admin/users/",
  },
];

const Link = ({ label }: { label: string; url: string }) => (
  <div className="text-lg ">
    <button className="block font-semibold m-2 p-2 hover:bg-gray-50">
      {label}
    </button>
  </div>
);

const LeftNavigation = () => (
  <div className="border m-4 p-4 w-80">
    {actions.map(({ label, url }) => (
      <Link key={label} label={label} url={url} />
    ))}
  </div>
);

export default LeftNavigation;

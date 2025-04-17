import logo from "/improve-tasker.svg";
export default function Header() {
  return (
    <nav class="py-4 md:py-6 fixed top-0 w-full bg-black z-50">
      <div class="container flex items-center justify-between gap-x-6">
        <a href="/">
          <img class="h-[45px]" src={logo} alt="Logo" />
        </a>
      </div>
    </nav>
  );
}

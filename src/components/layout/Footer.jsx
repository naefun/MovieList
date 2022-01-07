function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-5 flex flex-col justify-center w-full items-center p-5 bg-gray-900 text-gray-400">
      <p>made by 🖐️ by nathan</p>
      <p>Copyright &copy; {year}</p>
    </div>
  );
}

export default Footer;

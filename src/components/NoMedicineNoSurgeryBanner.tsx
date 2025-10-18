const NoMedicineNoSurgeryBanner = () => {
  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 animate-fade-in">
      <div className="bg-gradient-accent text-secondary-foreground px-6 py-2 rounded-full shadow-elegant">
        <p className="text-sm md:text-base font-bold text-center whitespace-nowrap">
          ✨ No medicine. No surgery. ✨
        </p>
      </div>
    </div>
  );
};

export default NoMedicineNoSurgeryBanner;

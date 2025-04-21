

const SkillIcon = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center">
    <Icon size={50} className="text-blue-500" />
    <p>{label}</p>
  </div>
);

export default SkillIcon;

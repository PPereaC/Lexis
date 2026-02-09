import {User} from "@heroui/user";

export const UserInfo = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      {/* Información del usuario */}
      <div className="flex flex-col items-end">
        <span className="text-sm font-medium text-text-title group-hover:text-primary transition-colors duration-200">Pablo Perea</span>
        <span className="text-xs text-text-title">Nivel 42</span>
      </div>
      
      {/* Avatar */}
      <div className="relative">
        <img 
          src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          alt="Jane Doe"
          className="w-10 h-10 rounded-full ring-2 ring-surface-secondary group-hover:ring-primary transition-all duration-200"
        />
        {/* Indicador de estado online */}
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-surface-darkest"></div>
      </div>
    </div>
  );
}

export default UserInfo;

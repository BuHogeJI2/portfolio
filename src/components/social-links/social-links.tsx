import { socialLinks } from './social-links.const';

export function SocialLinks() {
  return (
    <div className="flex gap-4 pt-4">
      {socialLinks.map(link => (
        <a key={link.href} href={link.href}>
          {link.icon}
        </a>
      ))}
    </div>
  );
}

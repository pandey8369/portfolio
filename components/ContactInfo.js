import { Mail, Phone, MapPin, Clock, Github, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function ContactInfo() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pandeyjirohit666@gmail.com',
      href: 'mailto:pandeyjirohit666@gmail.com',
      color: 'text-blue-500',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 83699 05982',
      href: 'tel:+918369905982',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Thane, Maharashtra, India',
      href: null,
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Mon–Fri, 10am–6pm IST',
      href: null,
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/pandey8369',
      color: 'text-gray-300',
      bgColor: 'bg-gray-800',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rohit-pandey-431577274/',
      color: 'text-blue-400',
      bgColor: 'bg-gray-800',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/rohitpandey_007x/',
      color: 'text-pink-400',
      bgColor: 'bg-gray-800',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100019347856873',
      color: 'text-blue-400',
      bgColor: 'bg-gray-800',
      hoverColor: 'hover:bg-blue-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700">
            <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-600/30`}>
              <item.icon size={20} className={item.color} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-400 mb-1">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-white font-medium hover:text-blue-400 transition-colors break-all"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-white font-medium">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Connect on Social Media</h3>
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-3 ${social.bgColor} ${social.hoverColor} hover:text-white rounded-xl transition-colors border border-gray-700`}
            >
              <social.icon size={18} className={social.color} />
              <span className="text-sm font-medium text-gray-300">{social.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Quick Response Note */}
      <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-4">
        <p className="text-sm text-blue-300">
          <strong>Quick Response:</strong> I typically respond to emails within 24 hours during business days.
        </p>
      </div>
    </div>
  );
}

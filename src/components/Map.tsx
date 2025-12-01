export default function Map() {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md">
      <iframe
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=La+Jara+Rosa,Los+Navalucillos,Toledo`}
      ></iframe>
    </div>
  );
}

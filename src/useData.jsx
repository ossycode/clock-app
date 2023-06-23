import { useEffect, useState } from "react";

export function useData(IP_URL) {
  const [clientip, setClientIp] = useState();
  const [location, setLocation] = useState({});
  const [data, setData] = useState({});
  // useEffect(
  //   function () {
  //     async function getIP() {
  //       try {
  //         const res = await fetch(IP_URL);
  //         if (!res.ok) throw new Error("Something went wrong");

  //         const data = await res.json();

  //         setData(data);
  //         setClientIp(data.client_ip);
  //       } catch (err) {
  //         console.error(err.meessage);
  //       }
  //     }
  //     getIP();
  //   },
  //   [IP_URL]
  // );

  useEffect(
    function () {
      async function getIP() {
        try {
          const res = await fetch(IP_URL);
          if (!res.ok) throw new Error("Something went wrong");

          const data = await res.json();

          setData(data);
          setClientIp(data.client_ip);
        } catch (err) {
          console.error(err.meessage);
        }
      }
      getIP();
      async function getLocation() {
        try {
          if (!clientip) return;
          const res = await fetch(
            `https://ipinfo.io/${clientip}?token=a9eb5f0070efbc`
          );
          if (!res.ok) throw new Error("Something went wrong");

          const data = await res.json();

          setLocation(data);

          console.log(data);
        } catch (err) {
          console.error(err.meessage);
        }
      }
      getLocation();
    },
    [clientip, IP_URL]
  );
  return [location, data];
}

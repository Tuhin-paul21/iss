document.addEventListener("DOMContentLoaded", () => {
        const logoContainer = document.getElementById("issLogo");
        const letters = ["I", "S", "S"];

        letters.forEach((char, index) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.classList.add("iss-char");
          span.style.animationDelay = `${index * 0.3}s`;
          logoContainer.appendChild(span);
        });

        setInterval(() => {
          const chars = logoContainer.querySelectorAll(".iss-char");
          chars.forEach((char, i) => {
            setTimeout(() => {
              char.classList.add("shuffle");
              setTimeout(() => char.classList.remove("shuffle"), 1000);
            }, i * 200);
          });
        }, 4000);
      });

document.addEventListener("DOMContentLoaded", () => {
          const images = document.querySelectorAll("#issCarousel .carousel-image");
          let current = 0;

          setInterval(() => {
            images[current].classList.remove("opacity-100");
            images[current].classList.add("opacity-0");

            current = (current + 1) % images.length;

            images[current].classList.remove("opacity-0");
            images[current].classList.add("opacity-100");
          }, 5000);

          // Keep your typewriter + slide animations
          const headingText = "International Space Station";
          const descText = "The International Space Station is a multinational research facility and engineering marvel, developed through strategic collaboration among leading space agencies. It serves as a microgravity laboratory, technology testbed, and platform for advanced scientific inquiry, fostering innovation, cross-disciplinary research, and diplomatic cooperation to advance humanity’s presence in space and readiness for deep-space exploration.";
          const orbitHeadingText = "Orbiting Laboratory";
          const orbitDescText = "The International Space Station maintains a low-Earth orbit approximately 400 kilometres above the planet, circling it in about 92 minutes. Travelling at nearly 28,000 kilometres per hour, this trajectory enables continuous global coverage, supports microgravity research, and provides an unparalleled vantage point for Earth observation and international scientific collaboration.";

          const headingEl = document.getElementById("heroHeading");
          const descEl = document.getElementById("heroDesc");
          const orbitHeadingEl = document.getElementById("orbitHeading");
          const orbitDescEl = document.getElementById("orbitDesc");

          let i = 0, j = 0, k = 0, l = 0;

          function typeHeading() {
            if (i < headingText.length) {
              headingEl.textContent += headingText.charAt(i);
              i++;
              setTimeout(typeHeading, 50);
            } else {
              setTimeout(typeDesc, 400);
            }
          }

          function typeDesc() {
            if (j < descText.length) {
              descEl.textContent += descText.charAt(j);
              j++;
              setTimeout(typeDesc, 30);
            }
          }

          function typeOrbitHeading() {
            if (k < orbitHeadingText.length) {
              orbitHeadingEl.textContent += orbitHeadingText.charAt(k);
              k++;
              setTimeout(typeOrbitHeading, 50);
            } else {
              setTimeout(typeOrbitDesc, 400);
            }
          }

          function typeOrbitDesc() {
            if (l < orbitDescText.length) {
              orbitDescEl.textContent += orbitDescText.charAt(l);
              l++;
              setTimeout(typeOrbitDesc, 30);
            }
          }

          setTimeout(() => {
            const leftContent = document.getElementById("heroLeft");
            const rightContent = document.getElementById("heroRight");

            leftContent.classList.add("animate-slideInLeft");
            leftContent.classList.remove("opacity-0");
            rightContent.classList.add("animate-slideInRight");
            rightContent.classList.remove("opacity-0");

            headingEl.textContent = "";
            descEl.textContent = "";
            orbitHeadingEl.textContent = "";
            orbitDescEl.textContent = "";

            typeHeading();
            typeOrbitHeading();
          }, 300);
        });

const eventDetails = {
          RollOut1A1B: {
            title: "Solar Arrays 1A/1B",
            desc: "The Roll-Out Solar Arrays (ROSA) 1A and 1B are advanced solar array systems installed on the International Space Station to boost its power capacity. Featuring a lightweight, flexible design, they deploy efficiently while minimizing launch volume and mass. Their enhanced energy output supports scientific experiments, station operations, and long-duration missions, showcasing modern advancements in space power technology.",
            img: "cons 2023.webp"
          },
          RollOut3A4A: {
            title: "Solar Arrays 3A/4A",
            desc: "The Roll-Out Solar Arrays (ROSA) 3A and 4A represent advanced, lightweight, and compact solar array systems deployed on the International Space Station. Designed for high efficiency and durability, they enhance the station’s power generation capabilities while reducing launch mass and volume. Their flexible structure and modular design demonstrate cutting-edge innovation in space-based energy solutions.",
            img: "cons 2022.webp"
          },
          RollOutNauka: {
            title: "Nauka Multipurpose Laboratory Module",
            desc: "The Nauka Multipurpose Laboratory Module (MLM)** is a key addition to the Russian Orbital Segment of the International Space Station. Designed to expand research capabilities, Nauka serves as a laboratory, storage area, and docking port. It is equipped with advanced life-support systems, robotic interfaces, and scientific instruments to enhance microgravity experiments. Additionally, Nauka provides crew quarters, an airlock for experiments, and interfaces for future Russian modules, significantly strengthening the station’s operational flexibility and long-term sustainability.",
            img: "nauka pic.webp"
          },
          RollOut2b4b: {
            title: "Solar Arrays 2B/4B",
            desc: "The Roll-Out Solar Arrays (ROSA) 2B and 4B are innovative solar panel systems installed on the International Space Station to enhance its power generation capabilities. Featuring a flexible, lightweight design, these arrays deploy efficiently in space, providing increased energy output while minimizing launch mass and volume. Their advanced technology supports the station's growing energy needs for scientific research and daily operations, showcasing significant advancements in space-based solar power solutions.",
            img: "2B4B pic.jpg"
          },
          RollOutnanoracks: {
            title: "NanoRacks Bishop Airlock",
            desc: "The NanoRacks Bishop Airlock is the first commercially developed airlock on the International Space Station, designed to expand the station’s capabilities for deploying satellites, transferring equipment, and conducting scientific experiments. It provides a larger volume than existing airlocks, enabling the release of multiple payloads at once. The Bishop Airlock supports external research, robotic operations, and hardware disposal, offering greater flexibility for governmental and commercial partners. Its modular design strengthens collaboration between NASA, private industry, and international stakeholders, enhancing the ISS as a hub for innovation in low-Earth orbit.",
            img: "nanorack image.webp"
          },
          RollOutbeam: {
            title: "Bigelow Expandable Activity Module (BEAM)",
            desc: "The Bigelow Expandable Activity Module (BEAM) is an experimental inflatable habitat attached to the International Space Station. Designed to test expandable technology for future space habitats, BEAM provides additional living and working space while being lightweight and compact during launch. Its innovative design allows it to expand once in orbit, offering enhanced radiation protection and micrometeoroid shielding. BEAM serves as a proof-of-concept for future deep-space missions, demonstrating the potential for cost-effective, scalable habitats in space exploration.",
            img: "bigelow.image.jpg"
          },
          RollOutams2: {
            title: "Alpha Magetic Spectrometer (AMS-2)",
            desc: "The Alpha Magnetic Spectrometer (AMS-2) is a state-of-the-art particle physics experiment mounted on the International Space Station. Designed to study cosmic rays and search for evidence of dark matter and antimatter, AMS-2 utilizes a powerful magnetic field to analyze high-energy particles from space. Its advanced detectors provide precise measurements of particle properties, contributing to our understanding of the universe's fundamental structure. AMS-2 represents a significant collaboration between international scientific communities, advancing research in astrophysics and cosmology.",
            img: "ams2 image.webp"
          },
          RollOutelc3: {
            title: "EXPRESS Logistics Carrier-3 (ELC-3)",
            desc: "The EXPRESS Logistics Carrier-3 (ELC-3) is a key external platform on the International Space Station designed to support scientific experiments and hardware storage. It provides a stable mounting surface for various payloads, including instruments for Earth observation, space environment monitoring, and technology demonstrations. ELC-3 enhances the station's research capabilities by facilitating easy access to the harsh space environment, allowing for long-term exposure experiments. Its modular design supports efficient installation and maintenance, contributing to the ISS's role as a versatile laboratory in low Earth orbit.",
            img: "elc image.jpg"
          },
          RollOutpmm: {
            title: "Permanent Multipurpose Module (PMM)",
            desc: "The Permanent Multipurpose Module (PMM) is a versatile storage and logistics module attached to the International Space Station. Originally launched as the Multi-Purpose Logistics Module (MPLM) Leonardo, it was converted into a permanent fixture to provide additional storage space for supplies, equipment, and scientific experiments. The PMM enhances the station's operational efficiency by freeing up space in other modules and supporting long-duration missions. Its robust design and integration with the ISS systems make it a critical component for sustaining crew activities and research in microgravity.",
            img: "pmm image.jpg"
          },
          RollOutelc4: {
            title: "EXPRESS Logistics Carrier-4 (ELC-4)",
            desc: "The EXPRESS Logistics Carrier-4 (ELC-4) is an external payload platform mounted on the International Space Station. It is designed to store spare parts, Orbital Replacement Units (ORUs), and scientific experiments that require exposure to the space environment. Positioned on the truss structure, ELC-4 provides power, data, and thermal connections to support long-term operations. It plays a vital role in ensuring the ISS remains fully functional by enabling astronauts and robotic systems to access and replace critical components when needed.",
            img: "elc 4.jpg"
          },
          RollOutprichal: {
            title: "Prichal Docking Module",
            desc: "The Prichal Docking Module is a Russian-built node module designed for the International Space Station. Serving as a versatile docking port, it enhances the station’s capacity to accommodate visiting spacecraft. Its robust design provides multiple docking ports, expanding operational flexibility and supporting future missions in low Earth orbit.",
            img: "prichal image.webp"
          },
          RollOutrmrm1: {
            title: "Rassvet Mini-Research Module-1",
            desc: "The Rassvet Mini-Research Module-1 (MRM-1) is a Russian-built module attached to the International Space Station (ISS). Primarily serving as a docking port for visiting spacecraft, it also provides cargo storage space and scientific research capabilities. Rassvet enhances the Russian Orbital Segment’s versatility by supporting docking, crew transfer, and equipment storage, while facilitating integration with other station modules.",
            img: "rassvet.jpg"
          },
          RollOutcupola: {
            title: "Cupola",
            desc: "The Cupola is an observatory module on the International Space Station (ISS), developed by the European Space Agency (ESA). Featuring seven windows, it provides astronauts with panoramic views of Earth, space, and station operations. The module is primarily used for monitoring spacecraft arrivals, controlling the Canadarm2 robotic arm, and conducting Earth observation. Its design significantly enhances crew situational awareness and also serves as a unique space for relaxation and photography.",
            img: "cupola.jpg"
          },
          RollOuttm: {
            title: "Tranquility Module",
            desc: "The Tranquility Module, also known as Node 3, is a key component of the International Space Station (ISS) that provides life-support systems and additional living space for the crew. It houses essential systems such as air revitalization, water recycling, and waste management. Tranquility also features exercise equipment and a cupola for Earth observation, enhancing both the functionality and comfort of the station. Its integration with other modules supports long-duration missions and improves overall crew well-being.",
            img: "tranquility.webp"
          },
          RollOutelc2: {
            title: "Express Logistics Carrier-2",
            desc: "The EXPRESS Logistics Carrier-2 (ELC-2) is an external payload platform mounted on the International Space Station. It is designed to store spare parts, Orbital Replacement Units (ORUs), and scientific experiments that require exposure to the space environment. Positioned on the truss structure, ELC-2 provides power, data, and thermal connections to support long-term operations. It plays a vital role in ensuring the ISS remains fully functional by enabling astronauts and robotic systems to access and replace critical components when needed.",
            img: "elc2.jpg"
          },
          RollOutelc1: {
            title: "Express Logistics Carrier-1",
            desc: "The EXPRESS Logistics Carrier-1 (ELC-1) is an external platform on the International Space Station (ISS) designed to support scientific experiments and hardware storage. It provides a stable mounting surface for various payloads, including instruments for Earth observation, space environment monitoring, and technology demonstrations. ELC-1 enhances the station's research capabilities by facilitating easy access to the harsh space environment, allowing for long-term exposure experiments. Its modular design supports efficient installation and maintenance, contributing to the ISS's role as a versatile laboratory in low Earth orbit.",
            img: "elc 1.jpg"
          },
          RollOutpmrm2: {
            title: "Poisk Mini-Research Module-2",
            desc: "The Poisk Mini-Research Module-2 (MRM-2) is a Russian-built module attached to the International Space Station (ISS). It serves as both a docking port for visiting spacecraft and a research facility. Poisk enhances the Russian Orbital Segment's capabilities by providing additional space for scientific experiments, cargo storage, and crew transfer. Its design supports the integration of new technologies and contributes to the overall functionality and sustainability of the ISS.",
            img: "poisk.webp"
          },
          RollOutjef: {
            title: "Japanese Exposed Facility",
            desc: "The Japanese Exposed Facility (JEF) is an external platform on the International Space Station (ISS) that supports scientific experiments and technology demonstrations in the harsh space environment. Developed by the Japan Aerospace Exploration Agency (JAXA), JEF provides a stable mounting surface for various payloads, including Earth observation instruments, space environment monitors, and materials exposure experiments. Its design allows for easy installation and maintenance, enhancing the ISS's research capabilities and fostering international collaboration in space science.",
            img: "jef.webp"
          },
          RollOuts6solar: {
            title: "S6 (Starboard) Truss Spacer and Solar Arrays",
            desc: "The S6 (Starboard) Truss Spacer and Solar Arrays are critical components of the International Space Station's power generation system. The S6 truss segment provides structural support for the starboard-side solar arrays, which are responsible for converting sunlight into electrical energy to power the station. These solar arrays are designed to track the sun, maximizing energy capture throughout the day. The S6 truss also houses various systems, including radiators for thermal control and communication antennas, contributing to the overall functionality and sustainability of the ISS.",
            img: "s6.jpg"
          },
          RollOutjemk: {
            title: "Japanese Experiment Module Kibo",
            desc: "The Japanese Experiment Module Kibo is a key component of the International Space Station (ISS) developed by the Japan Aerospace Exploration Agency (JAXA). Kibo, meaning 'hope' in Japanese, is the largest single module on the ISS and serves as a versatile laboratory for scientific research in microgravity. It consists of a pressurized module for experiments, an exposed facility for external experiments, and a logistics module for storage. Kibo supports a wide range of scientific disciplines, including biology, medicine, materials science, and space technology, contributing significantly to the ISS's research capabilities.",
            img: "kibo.jpg"
          },
          RollOutdex: {
            title: "DEXTRE",
            desc: "DEXTRE, also known as the Special Purpose Dexterous Manipulator (SPDM), is a robotic system attached to the International Space Station (ISS) designed for precision tasks in space. Developed by the Canadian Space Agency (CSA), DEXTRE is equipped with two arms and a variety of tools, allowing it to perform delicate operations such as maintenance, repairs, and payload handling. It works in conjunction with the Canadarm2 robotic arm, enhancing the station's capabilities for external operations without requiring spacewalks. DEXTRE's advanced dexterity and versatility make it a critical asset for sustaining the ISS and supporting future space missions.",
            img: "dextre.jpg"
          },
          RollOutjlm: {
            title: "Japanese Logistics Module",
            desc: "The Japanese Logistics Module (JLM) is a key component of the International Space Station (ISS) developed by the Japan Aerospace Exploration Agency (JAXA). It serves as a storage and transport module for supplies, equipment, and scientific experiments. The JLM is designed to facilitate the efficient transfer of cargo between Earth and the ISS, supporting long-duration missions and enhancing the station's operational capabilities. Its robust design and integration with other ISS systems make it a critical asset for sustaining crew activities and research in microgravity.",
            img: "jlm.jpg"
          },
          RollOutclm: {
            title: "Columbus Laboratory Module",
            desc: "The Columbus Laboratory Module is a key component of the International Space Station (ISS) developed by the European Space Agency (ESA). It serves as a versatile research facility for scientific experiments in microgravity, covering a wide range of disciplines including biology, fluid physics, materials science, and space technology. Columbus is equipped with advanced laboratories, workstations, and storage areas, allowing astronauts to conduct experiments that contribute to our understanding of fundamental scientific principles and support future space exploration. Its integration with other ISS modules enhances international collaboration and expands the station's research capabilities.",
            img: "clm.jpeg"
          },
          RollOuthm: {
            title: "Harmony Module",
            desc: "The Harmony Module, also known as Node 2, is a crucial component of the International Space Station (ISS) that serves as a connecting hub for various modules and provides additional living and working space for the crew. It houses essential systems such as life support, environmental control, and communication equipment. Harmony also features docking ports for visiting spacecraft and modules, enhancing the station's operational flexibility. Its design supports long-duration missions by improving crew comfort and facilitating scientific research in microgravity.",
            img: "harmony.webp"
          },
          RollOuts5: {
            title: "S5 (Starboard) Truss Spacer",
            desc: "The S5 (Starboard) Truss Spacer is a structural component of the International Space Station (ISS) that provides support and stability to the starboard-side truss segments. It serves as a connection point for various systems, including solar arrays, radiators, and communication antennas. The S5 truss spacer enhances the overall integrity of the station's truss structure, ensuring that it can withstand the stresses of space operations while maintaining optimal alignment for power generation and thermal control. Its robust design contributes to the long-term sustainability and functionality of the ISS.",
            img: "s5.jpg"
          },
          RollOutesp3: {
            title: "External Stowage Platform-3 (ESP-3)",
            desc: "The External Stowage Platform-3 (ESP-3) is an external storage platform on the International Space Station (ISS) designed to hold spare parts and Orbital Replacement Units (ORUs) for maintenance and repairs. It provides a convenient location for astronauts and robotic systems to access critical components needed to sustain the station's operations. ESP-3 enhances the ISS's ability to perform timely repairs and upgrades, ensuring the continued functionality of essential systems in the harsh space environment.",
            img: "esp3.webp"
          },
          RollOuts3s4: {
            title: "S3/S4 (Starboard) Truss and Solar Arrays",
            desc: "The S3/S4 (Starboard) Truss and Solar Arrays are integral components of the International Space Station's power generation system. The S3 and S4 truss segments provide structural support for the starboard-side solar arrays, which are responsible for converting sunlight into electrical energy to power the station. These solar arrays are designed to track the sun, maximizing energy capture throughout the day. The S3/S4 truss also houses various systems, including radiators for thermal control and communication antennas, contributing to the overall functionality and sustainability of the ISS.",
            img: "s3-s4.jpg"
          },
          RollOuTs: {
            title: "P5 (Port) Truss Spacer",
            desc: "The P5 (Port) Truss Spacer is an essential structural segment of the ISS Integrated Truss System. Unlike other truss modules, it does not host solar arrays, radiators, or major subsystems. Instead, it functions as a spacer, maintaining correct distance between adjoining trusses, while enabling proper alignment, stability, and efficient routing of power, data, and thermal connections.",
            img: "P5 portv.jpg"
          },
          RollOutTSA: {
            title: "P3/P4 (Port) Truss and Solar Arrays",
            desc: " The P3/P4 (Port) Truss and Solar Arrays are critical components of the International Space Station's power generation system. The P3 and P4 truss segments provide structural support for the port-side solar arrays, which are responsible for converting sunlight into electrical energy to power the station. These solar arrays are designed to track the sun, maximizing energy capture throughout the day. The P3/P4 truss also houses various systems, including radiators for thermal control and communication antennas, contributing to the overall functionality and sustainability of the ISS.",
            img: "p3p4.jpg"
          },
          Rolloutesp2: {
            title: "External Stowage Platform-2 (ESP-2)",
            desc: "The External Stowage Platform-2 (ESP-2) is an external storage platform on the International Space Station (ISS) designed to hold spare parts and Orbital Replacement Units (ORUs) for maintenance and repairs. It provides a convenient location for astronauts and robotic systems to access critical components needed to sustain the station's operations. ESP-2 enhances the ISS's ability to perform timely repairs and upgrades, ensuring the continued functionality of essential systems in the harsh space environment.",
            img: "ESP 2.jpg"
          },
          RollOutp1: {
            title: "P1 (Port) Truss Spacer",
            desc: "The P1 (Port) Truss Spacer is a structural component of the International Space Station (ISS) that provides support and stability to the port-side truss segments. It serves as a connection point for various systems, including solar arrays, radiators, and communication antennas. The P1 truss spacer enhances the overall integrity of the station's truss structure, ensuring that it can withstand the stresses of space operations while maintaining optimal alignment for power generation and thermal control. Its robust design contributes to the long-term sustainability and functionality of the ISS.",
            img: "p1 truss.webp"
          },
          RollOuts1truss: {
            title: "S1 (Starboard) Truss Spacer",
            desc: "The S1 (Starboard) Truss Spacer is a structural component of the International Space Station (ISS) that provides support and stability to the starboard-side truss segments. It serves as a connection point for various systems, including solar arrays, radiators, and communication antennas. The S1 truss spacer enhances the overall integrity of the station's truss structure, ensuring that it can withstand the stresses of space operations while maintaining optimal alignment for power generation and thermal control. Its robust design contributes to the long-term sustainability and functionality of the ISS.",
            img: "S1_Truss.jpg"
          },
          RollOutmbs: {
            title: "Mobile Base System (MBS)",
            desc: "The Mobile Base System (MBS) is a key component of the International Space Station's robotic infrastructure. It serves as a movable platform that allows the Canadarm2 robotic arm and DEXTRE to traverse the length of the station's truss structure. The MBS enhances the versatility and reach of these robotic systems, enabling them to perform maintenance, repairs, and payload handling across various locations on the ISS. Its design includes rails and attachment points, facilitating efficient movement and positioning of the robotic arms for a wide range of tasks.",
            img: "mbs.jpg"
          },
          RollOuts0truss: {
            title: "S0 (Starboard) Truss",
            desc: "The S0 (Starboard Zero) Truss is the central backbone of the International Space Station truss system. Installed in April 2002, it connects directly to the Destiny Laboratory Module and provides structural stability, power, thermal control, and data distribution. It also supports the Mobile Transporter, enabling Canadarm2 mobility for assembly and maintenance.",
            img: "s0 starboard.jpg"
          },
          RollOutpdc: {
            title: "Pirs Docking Compartment",
            desc: "The Pirs Docking Compartment is a Russian-built module attached to the International Space Station (ISS) that serves as both a docking port for visiting spacecraft and an airlock for spacewalks. It provides a secure connection point for Soyuz and Progress vehicles, facilitating crew transfer and cargo delivery. Additionally, Pirs is equipped with an airlock that allows cosmonauts to conduct extravehicular activities (EVAs) in support of station maintenance and upgrades. Its dual functionality enhances the operational capabilities of the Russian Orbital Segment and contributes to the overall sustainability of the ISS.",
            img: "pirs.jpg"
          },
          RollOutesp1: {
            title: "External Stowage Platform-1 (ESP-1)",
            desc: "The External Stowage Platform-1 (ESP-1) is an external storage platform on the International Space Station (ISS) designed to hold spare parts and Orbital Replacement Units (ORUs) for maintenance and repairs. It provides a convenient location for astronauts and robotic systems to access critical components needed to sustain the station's operations. ESP-1 enhances the ISS's ability to perform timely repairs and upgrades, ensuring the continued functionality of essential systems in the harsh space environment.",
            img: "esp1.jpg"
          },
          RollOutdlm: {
            title: "Docking and Laboratory Module (DLM)",
            desc: "The Docking and Laboratory Module (DLM) is a versatile module on the International Space Station (ISS) that serves both as a docking port for visiting spacecraft and as a laboratory for scientific research. It provides additional space for experiments in microgravity, covering a wide range of disciplines including biology, materials science, and space technology. The DLM enhances the station's operational capabilities by facilitating crew transfer, cargo storage, and scientific investigations, contributing significantly to the ISS's role as a hub for international collaboration in space exploration.",
            img: "dlm.jpg"
          },
          RollOutp6truss: {
            title: "P6 (Port) Truss Spacer",
            desc: "The P6 (Port) Truss Spacer is a structural component of the International Space Station (ISS) that provides support and stability to the port-side truss segments. It serves as a connection point for various systems, including solar arrays, radiators, and communication antennas. The P6 truss spacer enhances the overall integrity of the station's truss structure, ensuring that it can withstand the stresses of space operations while maintaining optimal alignment for power generation and thermal control. Its robust design contributes to the long-term sustainability and functionality of the ISS.",
            img: "p6 spacer.jpg"
          },
          RollOuts3s4: {
            title: "S3/S4 (Starboard) Truss and Solar Arrays",
            desc: "The S3/S4 (Starboard) Truss and Solar Arrays are integral components of the International Space Station's power generation system. The S3 and S4 truss segments provide structural support for the starboard-side solar arrays, which are responsible for converting sunlight into electrical energy to power the station. These solar arrays are designed to track the sun, maximizing energy capture throughout the day. The S3/S4 truss also houses various systems, including radiators for thermal control and communication antennas, contributing to the overall functionality and sustainability of the ISS.",
            img: "s3-s4.jpg"
          },
          Rolloutp5truss: {
            title: "P5 (Port) Truss Spacer",
            desc: "The P5 (Port) Truss Spacer is a structural component of the International Space Station (ISS) that provides support and stability to the port-side truss segments. It serves as a connection point for various systems, including solar arrays, radiators, and communication antennas. The P5 truss spacer enhances the overall integrity of the station's truss structure, ensuring that it can withstand the stresses of space operations while maintaining optimal alignment for power generation and thermal control. Its robust design contributes to the long-term sustainability and functionality of the ISS.",
            img: "p5.jpg"
          },
          Rolloutp3p4: {
            title: "P3/P4 (Port) Truss and Solar Arrays",
            desc: "The P3/P4 (Port) Truss and Solar Arrays are critical components of the International Space Station's power generation system. The P3 and P4 truss segments provide structural support for the port-side solar arrays, which are responsible for converting sunlight into electrical energy to power the station. These solar arrays are designed to track the sun, maximizing energy capture throughout the day. The P3/P4 truss also houses various systems, including radiators for thermal control and communication antennas, contributing to the overall functionality and sustainability of the ISS.",
            img: "p3-p4.jpg"
          },
          Rolloutesp2: {
            title: "External Stowage Platform-2 (ESP-2)",
            desc: "The External Stowage Platform-2 (ESP-2) is an external storage platform on the International Space Station (ISS) designed to hold spare parts and Orbital Replacement Units (ORUs) for maintenance and repairs. It provides a convenient location for astronauts and robotic systems to access critical components needed to sustain the station's operations. ESP-2 enhances the ISS's ability to perform timely repairs and upgrades, ensuring the continued functionality of essential systems in the harsh space environment.",
            img: "esp2.jpg"
          },
          Rolloutp1: {
            title: "P1 (Port) Truss Spacer",
            desc: "The P1 (Port) Truss Spacer is a structural component of the International Space Station (ISS) that provides support and stability to the port-side truss segments. It serves as a connection point for various systems, including solar arrays, radiators, and communication antennas. The P1 truss spacer enhances the overall integrity of the station's truss structure, ensuring that it can withstand the stresses of space operations while maintaining optimal alignment for power generation and thermal control. Its robust design contributes to the long-term sustainability and functionality of the ISS.",
            img: "p1.jpg"
          },
          Rollouts1truss: {
            title: "S1 (Starboard) Truss Spacer",
            desc: "The S1 (Starboard) Truss Spacer is a structural component of the International Space Station (ISS) that provides support and stability to the starboard-side truss segments. It serves as a connection point for various systems, including solar arrays, radiators, and communication antennas. The S1 truss spacer enhances the overall integrity of the station's truss structure, ensuring that it can withstand the stresses of space operations while maintaining optimal alignment for power generation and thermal control. Its robust design contributes to the long-term sustainability and functionality of the ISS.",
            img: "s1.jpg"
          },
          Rolloutmbs: {
            title: "Mobile Base System (MBS)",
            desc: "The Mobile Base System (MBS) is a key component of the International Space Station's robotic infrastructure. It serves as a movable platform that allows the Canadarm2 robotic arm and DEXTRE to traverse the length of the station's truss structure. The MBS enhances the versatility and reach of these robotic systems, enabling them to perform maintenance, repairs, and payload handling across various locations on the ISS. Its design includes rails and attachment points, facilitating efficient movement and positioning of the robotic arms for a wide range of tasks.",
            img: "mbs.jpg"
          },
          Rollouts0truss: {
            title: "S0 (Center) Truss",
            desc: "The S0 (Center) Truss is the central segment of the International Space Station's truss structure, serving as a critical connection point for various systems and modules. It provides structural support for the station's solar arrays, radiators, and communication antennas. The S0 truss also houses essential components such as the Control Moment Gyroscopes (CMGs), which help maintain the station's orientation in space. Its robust design and strategic placement contribute to the overall stability and functionality of the ISS, ensuring that it can support the demands of long-duration space operations.",
            img: "s0.jpg"
          },
          Rolloutpdc: {
            title: "Power and Data Grapple Fixture (PDGF)",
            desc: "The Power and Data Grapple Fixture (PDGF) is a specialized attachment point on the International Space Station (ISS) that enables the Canadarm2 robotic arm to connect and interface with various payloads and modules. The PDGF provides both power and data connections, allowing the robotic arm to operate equipment, perform maintenance tasks, and assist with docking procedures. Its design enhances the versatility and functionality of the Canadarm2, making it a critical component for supporting the station's operations and scientific research.",
            img: "pdgf.jpg"
          },
          Rolloutqad: {
            title: "Quest Joint Airlock",
            desc: "The Quest Joint Airlock is a key component of the International Space Station (ISS) that serves as the primary airlock for extravehicular activities (EVAs), commonly known as spacewalks. It provides a safe and controlled environment for astronauts to transition between the pressurized interior of the station and the vacuum of space. The Quest airlock is equipped with two compartments: one for donning and doffing spacesuits and another for depressurization and repressurization. Its design supports a wide range of EVA tasks, including maintenance, repairs, and scientific experiments, making it an essential asset for the ISS's operations.",
            img: "Quest_airlock.jpg"
          },
          RollOutcrm: {
            title: "Canadarm2 Robotic Arm",
            desc: "The Canadarm2 is a sophisticated robotic arm attached to the International Space Station (ISS), developed by the Canadian Space Agency (CSA). It plays a crucial role in station operations, including capturing and docking visiting spacecraft, moving equipment and supplies, and assisting with maintenance tasks. The arm is highly versatile, capable of precise movements and equipped with various tools to perform complex tasks in the harsh environment of space. Canadarm2 enhances the ISS's capabilities for external operations, reducing the need for spacewalks and supporting the station's long-term sustainability.",
            img: "robo arm design.webp"
          },
          RollOutesp1: {
            title: "External Stowage Platform-1 (ESP-1)",
            desc: "The External Stowage Platform-1 (ESP-1) is an external storage platform on the International Space Station (ISS) designed to hold spare parts and Orbital Replacement Units (ORUs) for maintenance and repairs. It provides a convenient location for astronauts and robotic systems to access critical components needed to sustain the station's operations. ESP-1 enhances the ISS's ability to perform timely repairs and upgrades, ensuring the continued functionality of essential systems in the harsh space environment.",
            img: "external stowage.jpg"
          },
          RollOutdlm: {
            title: "Destiny Laboratory Module",
            desc: "The Destiny Laboratory Module is a key component of the International Space Station (ISS) developed by NASA. It serves as the primary research facility for U.S. experiments in microgravity, covering a wide range of scientific disciplines including biology, materials science, and space technology. Destiny is equipped with advanced laboratories, workstations, and storage areas, allowing astronauts to conduct experiments that contribute to our understanding of fundamental scientific principles and support future space exploration. Its integration with other ISS modules enhances international collaboration and expands the station's research capabilities.",
            img: "Destiny_module_pillars.jpg"
          },
          RollOutp6truss: {
            title: "P6 (Port) Truss Spacer",
            desc: "The P6 (Port) Truss Spacer is a structural component of the International Space Station (ISS) that provides support and stability to the port-side truss segments. It serves as a connection point for various systems, including solar arrays, radiators, and communication antennas. The P6 truss spacer enhances the overall integrity of the station's truss structure, ensuring that it can withstand the stresses of space operations while maintaining optimal alignment for power generation and thermal control. Its robust design contributes to the long-term sustainability and functionality of the ISS.",
            img: "p6.jpg"
          },
          RollOutz1truss: {
            title: "Z1 Truss",
            desc: "The Z1 Truss is a key structural component of the International Space Station (ISS) that serves as a mounting point for various systems, including communication antennas, radiators, and the first set of solar arrays. It provides essential support for the station's power generation and thermal control capabilities. The Z1 Truss also houses the Control Moment Gyroscopes (CMGs), which help maintain the station's orientation in space. Its robust design and strategic placement contribute to the overall stability and functionality of the ISS.",
            img: "z1.jpg"
          },
          RollOutzsm: {
            title: "Zvezda Service Module",
            desc: "The Zvezda Service Module is a critical component of the Russian Orbital Segment of the International Space Station (ISS). It serves as the primary living quarters for the crew, providing essential life-support systems, including air revitalization, water recycling, and waste management. Zvezda also houses the station's propulsion and navigation systems, enabling orbital adjustments and attitude control. Its design includes multiple docking ports for visiting spacecraft and modules, enhancing the operational capabilities of the ISS. As a key element of the station's infrastructure, Zvezda plays a vital role in supporting long-duration missions and ensuring crew safety and comfort.",
            img: "zvezda.jpg"
          },
          RollOutum: {
            title: "Unity Module",
            desc: "The Unity Module, also known as Node 1, is a crucial component of the International Space Station (ISS) that serves as a connecting hub for various modules and provides additional living and working space for the crew. It features multiple docking ports that allow for the attachment of other modules, spacecraft, and equipment. Unity houses essential systems such as life support, environmental control, and communication equipment. Its design supports long-duration missions by improving crew comfort and facilitating scientific research in microgravity.",
            img: "unity.jpg"
          },
          RollOutzm: {
            title: "Zarya Module",
            desc: "The Zarya Module, also known as the Functional Cargo Block (FGB), is the first module of the International Space Station (ISS) and serves as a critical component of its early infrastructure. Launched in 1998, Zarya provides essential functions such as propulsion, power generation, and storage for fuel and supplies. It features solar arrays for energy production and multiple docking ports for connecting other modules and spacecraft. Zarya's robust design and capabilities laid the foundation for the assembly and expansion of the ISS, supporting international collaboration in space exploration.",
            img: "zara module.webp"
          },
        };


        function isMobileView() {
          return window.innerWidth < 1024;
        }

        function showMobileDetail(moduleKey) {
          document.getElementById("mainView").classList.add("hidden");
          document.getElementById("mobileDetailView").classList.remove("hidden");

          const detail = eventDetails[moduleKey];
          if (detail) {
            document.getElementById("mobileModuleTitle").innerText = detail.title;
            document.getElementById("mobileModuleDesc").innerText = detail.desc;
            const imgEl = document.getElementById("mobileModuleImage");
            imgEl.src = detail.img;
            imgEl.classList.remove("hidden");
          }
        }

        function showMainView() {
          document.getElementById("mainView").classList.remove("hidden");
          document.getElementById("mobileDetailView").classList.add("hidden");
          document.getElementById("history").scrollIntoView({ behavior: "smooth", block: "start" });
        }

        document.querySelectorAll(".learn-more-btn").forEach(btn => {
          btn.addEventListener("click", e => {
            e.stopPropagation();
            const moduleKey = btn.closest("[data-module]").getAttribute("data-module");
            if (isMobileView()) {
              showMobileDetail(moduleKey);
            } else {
              const detail = eventDetails[moduleKey];
              if (detail) {
                document.getElementById("moduleTitle").innerText = detail.title;
                document.getElementById("moduleDesc").innerText = detail.desc;
                const imgEl = document.getElementById("moduleImage");
                imgEl.src = detail.img;
                imgEl.classList.remove("hidden");
              }
            }
          });
        });

        document.getElementById("backButton").addEventListener("click", showMainView);

class CarouselController {
          constructor() {
            this.currentSlide = 0;
            this.totalSlides = 10;
            this.slides = document.querySelectorAll('.carousel-slide');
            this.indicators = document.querySelectorAll('.carousel-indicator');
            this.isTransitioning = false;
            this.arrowHideTimeout = null;
            this.init();
            this.startAutoSlide();
          }

          init() {
            document.querySelector('.carousel-prev').addEventListener('click', () => this.prevSlide());
            document.querySelector('.carousel-next').addEventListener('click', () => this.nextSlide());

            this.indicators.forEach((indicator, index) => {
              indicator.addEventListener('click', () => this.goToSlide(index));
            });

            document.addEventListener('keydown', (e) => {
              if (e.key === 'ArrowLeft') this.prevSlide();
              if (e.key === 'ArrowRight') this.nextSlide();
            });

            // Mobile tap functionality for showing arrows
            const container = document.querySelector('.carousel-container');
            let startX = null;

            container.addEventListener('touchstart', (e) => {
              startX = e.touches[0].clientX;
              this.showArrowsOnMobile();
            });

            container.addEventListener('touchend', (e) => {
              if (!startX) return;
              const endX = e.changedTouches[0].clientX;
              const diff = startX - endX;
              if (Math.abs(diff) > 50) {
                if (diff > 0) this.nextSlide();
                else this.prevSlide();
              }
              startX = null;
            });

            // Also show arrows on tap/click for mobile
            container.addEventListener('click', (e) => {
              // Only trigger on mobile devices
              if (window.innerWidth <= 1024) {
                this.showArrowsOnMobile();
              }
            });
          }

          showArrowsOnMobile() {
            const container = document.querySelector('.carousel-container');
            container.classList.add('show-arrows');

            // Clear existing timeout
            if (this.arrowHideTimeout) {
              clearTimeout(this.arrowHideTimeout);
            }

            // Hide arrows after 2 seconds
            this.arrowHideTimeout = setTimeout(() => {
              container.classList.remove('show-arrows');
            }, 2000);
          }

          goToSlide(index) {
            if (this.isTransitioning || index === this.currentSlide) return;
            this.isTransitioning = true;
            this.slides[this.currentSlide].style.opacity = '0';
            this.slides[this.currentSlide].style.transform = 'translateX(-100%)';
            setTimeout(() => {
              this.slides[this.currentSlide].style.transform = 'translateX(-100%)';
              this.slides[index].style.transform = 'translateX(100%)';
              setTimeout(() => {
                this.slides[index].style.opacity = '1';
                this.slides[index].style.transform = 'translateX(0)';
                this.currentSlide = index;
                this.updateIndicators();
                this.updateCounter();
                setTimeout(() => {
                  this.isTransitioning = false;
                }, 700);
              }, 50);
            }, 350);
          }

          nextSlide() {
            const next = (this.currentSlide + 1) % this.totalSlides;
            this.goToSlide(next);
          }

          prevSlide() {
            const prev = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
            this.goToSlide(prev);
          }

          updateIndicators() {
            this.indicators.forEach((indicator, index) => {
              if (index === this.currentSlide) {
                indicator.classList.add('active');
                indicator.classList.remove('bg-white/30');
                indicator.classList.add('bg-blue-500');
              } else {
                indicator.classList.remove('active');
                indicator.classList.remove('bg-blue-500');
                indicator.classList.add('bg-white/30');
              }
            });
          }

          updateCounter() {
            document.getElementById('current-slide').textContent = this.currentSlide + 1;
            document.getElementById('total-slides').textContent = this.totalSlides;
          }

          startAutoSlide() {
            setInterval(() => {
              if (!this.isTransitioning) this.nextSlide();
            }, 8000);
          }
        }

        document.addEventListener('DOMContentLoaded', () => new CarouselController());

document.addEventListener('DOMContentLoaded', function () {
          // Enhanced Real-time ISS Data Simulation
          function updateISSData() {
            const now = new Date();

            // Simulate orbital mechanics (simplified)
            const orbitProgress = (now.getTime() / 1000 / 5520) % 1; // ~92 minute orbit
            const altitude = 408 + Math.sin(orbitProgress * Math.PI * 2) * 10; // Altitude variation
            const speed = 27600 + Math.sin(orbitProgress * Math.PI * 4) * 200; // Speed variation

            // Calculate mission days since November 20, 1998
            const missionStart = new Date('1998-11-20');
            const missionDays = Math.floor((now - missionStart) / (1000 * 60 * 60 * 24));

            // Calculate total distance (simplified)
            const totalDistance = (missionDays * 24 * 27600 / 1000000).toFixed(1); // Million km

            // Update real-time displays
            document.getElementById('iss-altitude').textContent = Math.round(altitude);
            document.getElementById('iss-speed').textContent = Math.round(speed).toLocaleString();
            document.getElementById('mission-days').textContent = missionDays.toLocaleString();
            document.getElementById('total-distance').textContent = totalDistance + 'B';
            document.getElementById('velocity-display').textContent = (speed / 3600).toFixed(2) + ' km/s';

            // Update orbit time
            const orbitMinutes = Math.floor(92 + Math.sin(orbitProgress * Math.PI) * 2);
            const orbitSeconds = Math.floor(Math.random() * 60);
            document.getElementById('orbit-time').textContent = `${orbitMinutes}:${orbitSeconds.toString().padStart(2, '0')}`;

            // Update location (simplified)
            const locations = [
              'Over Pacific Ocean', 'Over North America', 'Over Atlantic Ocean',
              'Over Europe', 'Over Asia', 'Over Indian Ocean', 'Over Australia',
              'Over Antarctica', 'Over South America', 'Over Africa'
            ];
            const locationIndex = Math.floor(orbitProgress * locations.length);
            document.getElementById('iss-location').textContent = locations[locationIndex];

            // Update timestamp
            document.getElementById('last-update').textContent = `Last update: ${now.toLocaleTimeString()}`;
          }

          // Update ISS data every 5 seconds
          updateISSData();
          setInterval(updateISSData, 5000);

          // Enhanced Counter Animation with Stagger
          const counters = document.querySelectorAll('.counter');
          let hasAnimated = false;

          function animateCounters() {
            if (hasAnimated) return;
            hasAnimated = true;

            counters.forEach((counter, index) => {
              setTimeout(() => {
                const target = parseInt(counter.getAttribute('data-target'));
                let current = 0;
                const increment = target / 60;

                const timer = setInterval(() => {
                  current += increment;
                  if (current >= target) {
                    counter.textContent = target.toLocaleString();
                    clearInterval(timer);
                  } else {
                    counter.textContent = Math.ceil(current).toLocaleString();
                  }
                }, 30);
              }, index * 200);
            });
          }

          // Enhanced Intersection Observer
          const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
          };

          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                if (entry.target.classList.contains('counter')) {
                  animateCounters();
                }
                // Add slide-in animations for other elements
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
              }
            });
          }, observerOptions);

          // Observe elements for animations
          document.querySelectorAll('.counter, .stat-card, .crew-member').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
          });

          // Enhanced Article System
          const articleContent = {
            'ammonia-leak': {
              title: 'Ammonia Coolant Loop Crisis: Emergency Recovery',
              content: `
                <div class="space-y-4">
                  <div class="flex items-center mb-3">
                    <span class="w-3 h-3 bg-red-400 rounded-full mr-2 animate-pulse"></span>
                    <span class="text-red-300 text-sm font-semibold">CRITICAL SYSTEM FAILURE • May 2013</span>
                  </div>
                  
                  <div class="bg-gradient-to-r from-red-900/30 to-black/20 p-4 rounded-xl border-l-4 border-red-400">
                    <h5 class="text-red-300 font-bold text-sm mb-3 flex items-center">
                      <span class="text-red-400 mr-2">⚠️</span> THE CRISIS
                    </h5>
                    <p class="text-xs text-gray-300 leading-relaxed text-justify">External Thermal Control System Loop A experienced critical ammonia leak, threatening station's ability to regulate temperature for essential electronics and life support systems. Temperature spike imminent.</p>
                  </div>
                  
                  <div class="bg-gradient-to-r from-green-900/30 to-black/20 p-4 rounded-xl border-l-4 border-green-400">
                    <h5 class="text-green-300 font-bold text-sm mb-3 flex items-center">
                      <span class="text-green-400 mr-2">🔧</span> ENGINEERING RESPONSE
                    </h5>
                    <div class="space-y-2">
                      <p class="text-xs text-gray-300">3-Phase Emergency Protocol Executed:</p>
                      <div class="grid grid-cols-1 gap-2 ml-2">
                        <div class="text-xs text-green-200">• Immediate isolation using bypass valves</div>
                        <div class="text-xs text-green-200">• Emergency EVA deployment (< 6 hours)</div>
                        <div class="text-xs text-green-200">• Pump module replacement in zero-G</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-gradient-to-r from-blue-900/30 to-black/20 p-4 rounded-xl border-l-4 border-blue-400">
                    <h5 class="text-blue-300 font-bold text-sm mb-3 flex items-center">
                      <span class="text-blue-400 mr-2">🚀</span> INNOVATION BREAKTHROUGH
                    </h5>
                    <p class="text-xs text-gray-300 leading-relaxed">Developed new EVA protocols for handling toxic ammonia in microgravity. Created specialized containment procedures that became standard for future missions.</p>
                  </div>

                  <div class="bg-gradient-to-r from-purple-900/30 to-black/20 p-4 rounded-xl border-l-4 border-purple-400">
                    <h5 class="text-purple-300 font-bold text-sm mb-3">⏱️ MISSION IMPACT</h5>
                    <p class="text-xs text-purple-200">Full thermal control restored in <span class="font-bold">48 hours</span>. Zero mission downtime. Crew safety maintained throughout entire operation.</p>
                  </div>
                </div>
              `
            },
            'solar-array': {
              title: 'Solar Array Crisis: 90-Minute Solutions',
              content: `
                <div class="space-y-4">
                  <div class="flex items-center mb-3">
                    <span class="w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                    <span class="text-yellow-300 text-sm font-semibold">POWER EMERGENCY • September 2007</span>
                  </div>
                  
                  <div class="bg-gradient-to-r from-red-900/30 to-black/20 p-4 rounded-xl border-l-4 border-red-400">
                    <h5 class="text-red-300 font-bold text-sm mb-3">⚡ POWER CRISIS</h5>
                    <p class="text-xs text-gray-300">Solar array P6 panels jammed during retraction sequence. Risk of catastrophic tearing threatened entire power generation system. Multiple panels stuck in dangerous positions.</p>
                  </div>

                  <div class="bg-gradient-to-r from-blue-900/30 to-black/20 p-4 rounded-xl border-l-4 border-blue-400">
                    <h5 class="text-blue-300 font-bold text-sm mb-3">🕒 TIME CONSTRAINTS</h5>
                    <p class="text-xs text-gray-300 mb-2">Ground teams had only 90-minute orbital windows to:</p>
                    <div class="space-y-1 ml-2">
                      <div class="text-xs text-blue-200">• Analyze telemetry data</div>
                      <div class="text-xs text-blue-200">• Develop solutions</div>
                      <div class="text-xs text-blue-200">• Execute commands</div>
                      <div class="text-xs text-blue-200">• Monitor results before next orbit</div>
                    </div>
                  </div>
                  
                  <div class="bg-gradient-to-r from-green-900/30 to-black/20 p-4 rounded-xl border-l-4 border-green-400">
                    <h5 class="text-green-300 font-bold text-sm mb-3">🎯 BREAKTHROUGH SOLUTION</h5>
                    <div class="space-y-2">
                      <p class="text-xs text-green-200 font-semibold">"Shake and Bake" Technique:</p>
                      <div class="ml-2 space-y-1">
                        <div class="text-xs text-gray-300">• Thermal cycling to expand/contract panels</div>
                        <div class="text-xs text-gray-300">• Robotic arm precise manipulation</div>
                        <div class="text-xs text-gray-300">• Coordinated vibration sequences</div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-gradient-to-r from-purple-900/30 to-black/20 p-4 rounded-xl border-l-4 border-purple-400">
                    <h5 class="text-purple-300 font-bold text-sm mb-3">🏆 PERFECT EXECUTION</h5>
                    <p class="text-xs text-purple-200">Successfully retracted all <span class="font-bold text-purple-100">58 of 58 panels</span> without damage. Maintained 100% power generation capacity.</p>
                  </div>
                </div>
              `
            },
            'debris-strike': {
              title: 'Debris Impact: Zero-G Emergency Repair',
              content: `
                <div class="space-y-4">
                  <div class="flex items-center mb-3">
                    <span class="w-3 h-3 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
                    <span class="text-orange-300 text-sm font-semibold">HULL BREACH • September 2018</span>
                  </div>
                  
                  <div class="bg-gradient-to-r from-red-900/30 to-black/20 p-4 rounded-xl border-l-4 border-red-400">
                    <h5 class="text-red-300 font-bold text-sm mb-3">🎯 HIGH-VELOCITY IMPACT</h5>
                    <p class="text-xs text-gray-300">Micrometeoroid created 2mm hole in Soyuz MS-09 orbital module. Impact velocity estimated at 28,000+ km/h. Slow pressure leak detected during routine checks.</p>
                  </div>

                  <div class="bg-gradient-to-r from-yellow-900/30 to-black/20 p-4 rounded-xl border-l-4 border-yellow-400">
                    <h5 class="text-yellow-300 font-bold text-sm mb-3">🔍 DETECTION PROTOCOL</h5>
                    <div class="space-y-2">
                      <p class="text-xs text-gray-300">Advanced leak detection system activated:</p>
                      <div class="ml-2 space-y-1">
                        <div class="text-xs text-yellow-200">• Ultrasonic leak detector scanning</div>
                        <div class="text-xs text-yellow-200">• Pressure differential analysis</div>
                        <div class="text-xs text-yellow-200">• Visual inspection using fiber optic camera</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-gradient-to-r from-green-900/30 to-black/20 p-4 rounded-xl border-l-4 border-green-400">
                    <h5 class="text-green-300 font-bold text-sm mb-3">🛠️ EMERGENCY PATCH</h5>
                    <div class="space-y-2">
                      <p class="text-xs text-green-200">Multi-layer repair technique:</p>
                      <div class="ml-2 space-y-1">
                        <div class="text-xs text-gray-300">• Kapton tape immediate seal</div>
                        <div class="text-xs text-gray-300">• Epoxy resin permanent patch</div>
                        <div class="text-xs text-gray-300">• Gauze reinforcement layer</div>
                        <div class="text-xs text-gray-300">• Sealant compound finishing</div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-gradient-to-r from-blue-900/30 to-black/20 p-4 rounded-xl border-l-4 border-blue-400">
                    <h5 class="text-blue-300 font-bold text-sm mb-3">🔬 ENHANCED PROTECTION</h5>
                    <p class="text-xs text-blue-200">Incident led to improved Whipple shield design and enhanced debris tracking protocols for future missions.</p>
                  </div>
                </div>
              `
            },
            'canadarm': {
              title: 'Canadarm2: Adaptive Robotic Solutions',
              content: `
                <div class="space-y-4">
                  <div class="flex items-center mb-3">
                    <span class="w-3 h-3 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                    <span class="text-purple-300 text-sm font-semibold">ROBOTIC CRISIS • March 2017</span>
                  </div>
                  
                  <div class="bg-gradient-to-r from-red-900/30 to-black/20 p-4 rounded-xl border-l-4 border-red-400">
                    <h5 class="text-red-300 font-bold text-sm mb-3">🤖 SYSTEM MALFUNCTION</h5>
                    <p class="text-xs text-gray-300">Canadarm2 shoulder pitch joint developed excessive friction and intermittent stalling. Critical for cargo operations, EVA support, and station maintenance.</p>
                  </div>

                  <div class="bg-gradient-to-r from-yellow-900/30 to-black/20 p-4 rounded-xl border-l-4 border-yellow-400">
                    <h5 class="text-yellow-300 font-bold text-sm mb-3">⚡ INNOVATIVE WORKAROUND</h5>
                    <div class="space-y-2">
                      <p class="text-xs text-yellow-200 font-semibold">"Hand-over-Hand" Technique:</p>
                      <div class="ml-2 space-y-1">
                        <div class="text-xs text-gray-300">• Use backup grapple fixtures</div>
                        <div class="text-xs text-gray-300">• Alternative joint configurations</div>
                        <div class="text-xs text-gray-300">• Load distribution across healthy joints</div>
                        <div class="text-xs text-gray-300">• Walking technique using base-to-tip movement</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-gradient-to-r from-green-900/30 to-black/20 p-4 rounded-xl border-l-4 border-green-400">
                    <h5 class="text-green-300 font-bold text-sm mb-3">📊 OPERATIONAL SUCCESS</h5>
                    <p class="text-xs text-green-200">Maintained <span class="font-bold text-green-100">95% operational capability</span> while planning replacement parts delivery. Demonstrated exceptional system redundancy design.</p>
                  </div>

                  <div class="bg-gradient-to-r from-blue-900/30 to-black/20 p-4 rounded-xl border-l-4 border-blue-400">
                    <h5 class="text-blue-300 font-bold text-sm mb-3">🔧 LONG-TERM SOLUTION</h5>
                    <p class="text-xs text-blue-200">New joint mechanisms delivered and installed during subsequent EVA missions. Enhanced diagnostic systems implemented for predictive maintenance.</p>
                  </div>
                </div>
              `
            },
            'water-recovery': {
              title: 'Water Recovery Crisis: System Redundancy',
              content: `
                <div class="space-y-4">
                  <div class="flex items-center mb-3">
                    <span class="w-3 h-3 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                    <span class="text-cyan-300 text-sm font-semibold">LIFE SUPPORT EMERGENCY • August 2019</span>
                  </div>
                  
                  <div class="bg-gradient-to-r from-red-900/30 to-black/20 p-4 rounded-xl border-l-4 border-red-400">
                    <h5 class="text-red-300 font-bold text-sm mb-3">💧 CRITICAL FAILURE</h5>
                    <p class="text-xs text-gray-300">Primary Water Recovery System experienced pump failure during 6-month expedition. No immediate resupply mission scheduled. Crew water reserves critically low.</p>
                  </div>

                  <div class="bg-gradient-to-r from-blue-900/30 to-black/20 p-4 rounded-xl border-l-4 border-blue-400">
                    <h5 class="text-blue-300 font-bold text-sm mb-3">🚨 EMERGENCY PROTOCOLS</h5>
                    <div class="space-y-2">
                      <p class="text-xs text-blue-200">Multi-system activation:</p>
                      <div class="ml-2 space-y-1">
                        <div class="text-xs text-gray-300">• Russian Elektron water system backup</div>
                        <div class="text-xs text-gray-300">• Strict water conservation measures</div>
                        <div class="text-xs text-gray-300">• Alternative purification protocols</div>
                        <div class="text-xs text-gray-300">• Emergency water rations deployment</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-gradient-to-r from-green-900/30 to-black/20 p-4 rounded-xl border-l-4 border-green-400">
                    <h5 class="text-green-300 font-bold text-sm mb-3">🌍 INTERNATIONAL COOPERATION</h5>
                    <p class="text-xs text-green-200">Multi-national design philosophy proved critical. Russian, American, and European systems worked together seamlessly to maintain crew safety.</p>
                  </div>

                  <div class="bg-gradient-to-r from-purple-900/30 to-black/20 p-4 rounded-xl border-l-4 border-purple-400">
                    <h5 class="text-purple-300 font-bold text-sm mb-3">🔬 MISSION SUCCESS</h5>
                    <p class="text-xs text-purple-200">Zero crew health impact. System repairs completed during next EVA cycle. Enhanced redundancy protocols implemented.</p>
                  </div>
                </div>
              `
            },
            'gyroscope': {
              title: 'Gyroscope Crisis: Minimal System Control',
              content: `
                <div class="space-y-4">
                  <div class="flex items-center mb-3">
                    <span class="w-3 h-3 bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
                    <span class="text-indigo-300 text-sm font-semibold">ATTITUDE CONTROL EMERGENCY • April 2014</span>
                  </div>
                  
                  <div class="bg-gradient-to-r from-red-900/30 to-black/20 p-4 rounded-xl border-l-4 border-red-400">
                    <h5 class="text-red-300 font-bold text-sm mb-3">⚖️ STABILITY CRISIS</h5>
                    <p class="text-xs text-gray-300">Two of four Control Moment Gyroscopes failed within 8 months. Station unable to maintain proper orientation without constant thruster burns, threatening fuel reserves.</p>
                  </div>

                  <div class="bg-gradient-to-r from-yellow-900/30 to-black/20 p-4 rounded-xl border-l-4 border-yellow-400">
                    <h5 class="text-yellow-300 font-bold text-sm mb-3">🎯 CREATIVE SOLUTIONS</h5>
                    <div class="space-y-2">
                      <p class="text-xs text-yellow-200">Advanced control techniques:</p>
                      <div class="ml-2 space-y-1">
                        <div class="text-xs text-gray-300">• Asymmetric momentum management</div>
                        <div class="text-xs text-gray-300">• Solar pressure attitude assistance</div>
                        <div class="text-xs text-gray-300">• Predictive control algorithms</div>
                        <div class="text-xs text-gray-300">• Optimized thruster firing patterns</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-gradient-to-r from-green-900/30 to-black/20 p-4 rounded-xl border-l-4 border-green-400">
                    <h5 class="text-green-300 font-bold text-sm mb-3">🔧 HARDWARE SOLUTION</h5>
                    <p class="text-xs text-green-200">Replacement gyroscopes successfully installed during complex EVA operations. Enhanced software continued operating with reduced hardware until repairs completed.</p>
                  </div>

                  <div class="bg-gradient-to-r from-blue-900/30 to-black/20 p-4 rounded-xl border-l-4 border-blue-400">
                    <h5 class="text-blue-300 font-bold text-sm mb-3">💡 ENGINEERING LEGACY</h5>
                    <p class="text-xs text-blue-200">Advanced control algorithms developed during crisis now standard operating procedures. Improved system resilience for future long-duration missions.</p>
                  </div>
                </div>
              `
            }
          };

          // Enhanced article display system
          function showArticleContent(articleId, title) {
            const activeArticle = document.getElementById('active-article');
            const activeTitle = document.getElementById('active-title');
            const activeContent = document.getElementById('active-content');

            if (articleContent[articleId]) {
              activeTitle.textContent = articleContent[articleId].title;
              activeContent.innerHTML = articleContent[articleId].content;

              activeArticle.classList.remove('hidden');
              activeArticle.style.opacity = '0';
              activeArticle.style.transform = 'translateY(-30px) scale(0.95)';

              setTimeout(() => {
                activeArticle.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                activeArticle.style.opacity = '1';
                activeArticle.style.transform = 'translateY(0) scale(1)';
              }, 50);

              // Mobile scroll behavior with better positioning
              if (window.innerWidth < 1024) {
                setTimeout(() => {
                  // Scroll with offset to prevent overlap with fixed headers
                  const offset = window.innerWidth < 768 ? 80 : 60;
                  const elementPosition = activeArticle.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }, 300);
              }
            }
          }

          // Article interaction handlers
          document.querySelectorAll('.learn-more-btn').forEach(button => {
            button.addEventListener('click', (e) => {
              e.preventDefault();
              const articleId = button.getAttribute('data-article');
              const card = button.closest('.article-card');
              const title = card.querySelector('h5').textContent.trim();

              // Enhanced button animation
              button.style.transform = 'translateX(8px) scale(1.05)';
              button.style.color = '#ffffff';
              setTimeout(() => {
                button.style.transform = 'translateX(0) scale(1)';
                button.style.color = '';
              }, 200);

              showArticleContent(articleId, title);
            });
          });

          // Close article handler
          document.getElementById('close-article').addEventListener('click', () => {
            const activeArticle = document.getElementById('active-article');
            activeArticle.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.6, 1)';
            activeArticle.style.opacity = '0';
            activeArticle.style.transform = 'translateY(-30px) scale(0.95)';

            setTimeout(() => {
              activeArticle.classList.add('hidden');
            }, 400);
          });

          // Enhanced crew member interactions
          document.querySelectorAll('.crew-member').forEach(member => {
            member.addEventListener('mouseenter', () => {
              member.style.transform = 'translateY(-3px) scale(1.02)';
              member.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.15)';
            });

            member.addEventListener('mouseleave', () => {
              member.style.transform = 'translateY(0) scale(1)';
              member.style.boxShadow = '';
            });
          });

          // Parallax effect for background elements
          function handleParallax() {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.floating-particles, .orbital-lines');

            parallaxElements.forEach((element, index) => {
              const speed = (index + 1) * 0.1;
              element.style.transform = `translateY(${scrolled * speed}px)`;
            });
          }

          // Throttled scroll event for performance
          let ticking = false;
          function requestTick() {
            if (!ticking) {
              requestAnimationFrame(handleParallax);
              ticking = true;
              setTimeout(() => { ticking = false; }, 16);
            }
          }

          window.addEventListener('scroll', requestTick);

          // Enhanced real-time data with more dynamic updates
          function updateAdvancedData() {
            const now = new Date();
            const seconds = now.getSeconds();

            // Create more realistic variations
            const variation1 = Math.sin(seconds * 0.1) * 0.5;
            const variation2 = Math.cos(seconds * 0.15) * 0.3;

            // Update crew count with mission-realistic number
            document.getElementById('crew-count').textContent = '7';

            // Add subtle animation to real-time stats
            document.querySelectorAll('.real-time-stat').forEach((stat, index) => {
              if (Math.random() < 0.1) { // 10% chance per update
                stat.style.transform = 'scale(1.02)';
                setTimeout(() => {
                  stat.style.transform = 'scale(1)';
                }, 150);
              }
            });
          }

          setInterval(updateAdvancedData, 2000);

          // Initialize with staggered animations
          setTimeout(() => {
            document.querySelectorAll('.challenge-card').forEach((card, index) => {
              card.style.animationDelay = `${index * 0.2}s`;
              card.classList.add('fade-in-up');
            });
          }, 500);

          console.log('Enhanced ISS Challenges section initialized with real-time data and advanced interactions!');
        });

// ISS Tracking System with Colorful Maps (No API Key Required)
          class ISSTracker {
            constructor() {
              this.map = null;
              this.issMarker = null;
              this.issPath = [];
              this.pathPolyline = null;
              this.updateInterval = null;
              this.countdownInterval = null;
              this.countdown = 5;
              this.isMapReady = false;

              // Initialize when Google Maps is loaded
              this.initializeWhenReady();
            }

            initializeWhenReady() {
              const checkContainer = () => {
                const mapContainer = document.getElementById('map');
                if (mapContainer && mapContainer.offsetHeight > 0) {
                  this.initializeMap();
                  this.startTracking();
                  this.startCountdown();
                } else {
                  setTimeout(checkContainer, 100);
                }
              };
              checkContainer();
            }

            initializeMap() {
              try {
                const mapContainer = document.getElementById('map');

                if (this.map) {
                  this.map.remove();
                }

                mapContainer.innerHTML = '';

                // Colorful AI-enhanced map style
                this.map = L.map('map', {
                  center: [20, 0],
                  zoom: window.innerWidth < 768 ? 2 : 3,
                  minZoom: 1,
                  maxZoom: 18,
                  zoomControl: true,
                  scrollWheelZoom: true,
                  dragging: true,
                  touchZoom: true,
                  doubleClickZoom: true,
                  boxZoom: true,
                  keyboard: true,
                  zoomAnimation: true,
                  fadeAnimation: true,
                  markerZoomAnimation: true,
                  fullscreenControl: true,
                  worldCopyJump: true,
                  maxBounds: [[-90, -180], [90, 180]],
                  maxBoundsViscosity: 0.5
                });

                // Use colorful CartoDB Voyager tiles (free, no API key required)
                L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                  attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
                  subdomains: 'abcd',
                  maxZoom: 18,
                  minZoom: 1,
                  noWrap: false,
                  continuousWorld: false
                }).addTo(this.map);

                // Add custom fullscreen control
                this.addFullscreenControl();

                // Add world wrapping fix for better zoom out experience
                this.map.on('zoomend', () => {
                  if (this.map.getZoom() <= 2) {
                    this.map.setMaxBounds(null);
                  } else {
                    this.map.setMaxBounds([[-90, -180], [90, 180]]);
                  }
                });

                this.map.whenReady(() => {
                  this.isMapReady = true;

                  const loadingDiv = document.getElementById('mapLoading');
                  if (loadingDiv) {
                    loadingDiv.style.opacity = '0';
                    setTimeout(() => loadingDiv.remove(), 300);
                  }

                  setTimeout(() => {
                    this.map.invalidateSize();
                  }, 100);
                });

              } catch (error) {
                console.error('Error initializing map:', error);
                this.showMapError();
              }
            }

            addFullscreenControl() {
              // Create custom fullscreen control matching Leaflet's zoom control style
              const FullscreenControl = L.Control.extend({
                options: {
                  position: 'topleft'
                },

                onAdd: function (map) {
                  const container = L.DomUtil.create('div', 'leaflet-control-zoom leaflet-bar leaflet-control');

                  const button = L.DomUtil.create('a', 'leaflet-control-zoom-in', container);
                  button.innerHTML = '⛶';
                  button.href = '#';
                  button.title = 'Enter fullscreen';
                  button.setAttribute('role', 'button');
                  button.setAttribute('aria-label', 'Enter fullscreen');
                  button.style.fontSize = '18px';
                  button.style.lineHeight = '26px';
                  button.style.textAlign = 'center';

                  L.DomEvent.disableClickPropagation(button);
                  L.DomEvent.on(button, 'click', L.DomEvent.stop);

                  L.DomEvent.on(button, 'click', function (e) {
                    map.getContainer().requestFullscreen?.() ||
                      map.getContainer().webkitRequestFullscreen?.() ||
                      map.getContainer().msRequestFullscreen?.() ||
                      map.getContainer().mozRequestFullScreen?.();
                  }, this);

                  // Update button based on fullscreen state
                  const updateButton = () => {
                    const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement ||
                      document.mozFullScreenElement || document.msFullscreenElement;

                    if (isFullscreen) {
                      button.innerHTML = '⛉';
                      button.title = 'Exit fullscreen';
                      button.setAttribute('aria-label', 'Exit fullscreen');
                      L.DomEvent.off(button, 'click');
                      L.DomEvent.on(button, 'click', L.DomEvent.stop);
                      L.DomEvent.on(button, 'click', function (e) {
                        document.exitFullscreen?.() ||
                          document.webkitExitFullscreen?.() ||
                          document.msExitFullscreen?.() ||
                          document.mozCancelFullScreen?.();
                      }, this);
                    } else {
                      button.innerHTML = '⛶';
                      button.title = 'Enter fullscreen';
                      button.setAttribute('aria-label', 'Enter fullscreen');
                      L.DomEvent.off(button, 'click');
                      L.DomEvent.on(button, 'click', L.DomEvent.stop);
                      L.DomEvent.on(button, 'click', function (e) {
                        map.getContainer().requestFullscreen?.() ||
                          map.getContainer().webkitRequestFullscreen?.() ||
                          map.getContainer().msRequestFullscreen?.() ||
                          map.getContainer().mozRequestFullScreen?.();
                      }, this);
                    }
                  };

                  // Listen for fullscreen changes
                  document.addEventListener('fullscreenchange', updateButton);
                  document.addEventListener('webkitfullscreenchange', updateButton);
                  document.addEventListener('mozfullscreenchange', updateButton);
                  document.addEventListener('MSFullscreenChange', updateButton);

                  return container;
                }
              });

              this.map.addControl(new FullscreenControl());

              // Handle fullscreen changes for map resize
              const handleFullscreenChange = () => {
                setTimeout(() => {
                  if (this.map) {
                    this.map.invalidateSize();

                    // Reset bounds and zoom constraints for fullscreen
                    if (document.fullscreenElement || document.webkitFullscreenElement ||
                      document.mozFullScreenElement || document.msFullscreenElement) {
                      // In fullscreen - remove bounds for better navigation
                      this.map.setMaxBounds(null);
                    } else {
                      // Exiting fullscreen - restore bounds if needed
                      if (this.map.getZoom() > 2) {
                        this.map.setMaxBounds([[-90, -180], [90, 180]]);
                      }
                    }
                  }
                }, 100);
              };

              document.addEventListener('fullscreenchange', handleFullscreenChange);
              document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
              document.addEventListener('mozfullscreenchange', handleFullscreenChange);
              document.addEventListener('MSFullscreenChange', handleFullscreenChange);
            }

            showMapError() {
              const mapContainer = document.getElementById('map');
              const loadingDiv = document.getElementById('mapLoading');

              if (loadingDiv) {
                loadingDiv.remove();
              }

              mapContainer.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #1f2937; border-radius: 16px; color: #9ca3af;">
        <div style="text-align: center; padding: 24px;">
          <svg style="width: 40px; height: 40px; margin: 0 auto 12px; color: #ef4444;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L5.082 18.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
          <p style="font-weight: 600; font-size: 14px;">Google Maps API Key Required</p>
          <p style="font-size: 12px; margin-top: 4px;">Please add your Google Maps API key to use the map</p>
        </div>
      </div>
    `;
            }

            async fetchISSPosition() {
              try {
                const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544', {
                  method: 'GET',
                  headers: {
                    'Accept': 'application/json'
                  }
                });

                if (response.ok) {
                  const data = await response.json();
                  const lat = parseFloat(data.latitude);
                  const lon = parseFloat(data.longitude);
                  const alt = parseFloat(data.altitude);

                  this.updatePosition(lat, lon, alt);
                  this.updateLocationInfo(lat, lon);
                } else {
                  throw new Error('API response not ok');
                }
              } catch (error) {
                console.warn('Primary API failed, using simulation:', error);
                this.simulateISSMovement();
              }
            }

            simulateISSMovement() {
              const now = Date.now();
              const startTime = 1609459200000;
              const period = 5580000;
              const elapsed = (now - startTime) / period;

              const inclination = 51.6 * Math.PI / 180;
              const angle = (elapsed * 2 * Math.PI) % (2 * Math.PI);

              const lat = Math.asin(Math.sin(inclination) * Math.sin(angle)) * 180 / Math.PI;
              const lon = ((elapsed * 360) % 360) - 180;
              const alt = 408;

              this.updatePosition(lat, lon, alt);
              this.updateLocationInfo(lat, lon);
            }

            updatePosition(lat, lon, alt = 408) {
              // Update coordinates display
              document.getElementById('latitude').textContent = `${lat.toFixed(4)}°`;
              document.getElementById('longitude').textContent = `${lon.toFixed(4)}°`;
              document.getElementById('altitude').textContent = `${alt.toFixed(0)} km`;

              if (!this.isMapReady || !this.map) return;

              try {
                // Update or create marker
                if (this.issMarker) {
                  this.issMarker.setLatLng([lat, lon]);
                } else {
                  // Create custom ISS icon with professional ISS logo design (transparent background)
                  const issIcon = L.divIcon({
                    className: 'iss-marker-custom',
                    html: `
            <div style="
              width: 36px; 
              height: 36px; 
              background: transparent;
              display: flex;
              align-items: center;
              justify-content: center;
              animation: issOrbit 4s ease-in-out infinite alternate;
              position: relative;
            ">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" style="filter: drop-shadow(0 0 8px rgba(0,0,0,0.8)) drop-shadow(0 0 15px rgba(255,255,255,0.6));">
                <!-- ISS Main Structure -->
                <rect x="40" y="30" width="20" height="40" fill="#f3f4f6" stroke="#374151" stroke-width="1.5"/>
                
                <!-- Solar Panel Arrays -->
                <rect x="10" y="45" width="25" height="10" fill="#2563eb" stroke="#1e40af" stroke-width="1"/>
                <rect x="65" y="45" width="25" height="10" fill="#2563eb" stroke="#1e40af" stroke-width="1"/>
                
                <!-- Solar Panel Details -->
                <line x1="12" y1="47" x2="33" y2="47" stroke="#93c5fd" stroke-width="0.5"/>
                <line x1="12" y1="49" x2="33" y2="49" stroke="#93c5fd" stroke-width="0.5"/>
                <line x1="12" y1="51" x2="33" y2="51" stroke="#93c5fd" stroke-width="0.5"/>
                <line x1="12" y1="53" x2="33" y2="53" stroke="#93c5fd" stroke-width="0.5"/>
                
                <line x1="67" y1="47" x2="88" y2="47" stroke="#93c5fd" stroke-width="0.5"/>
                <line x1="67" y1="49" x2="88" y2="49" stroke="#93c5fd" stroke-width="0.5"/>
                <line x1="67" y1="51" x2="88" y2="51" stroke="#93c5fd" stroke-width="0.5"/>
                <line x1="67" y1="53" x2="88" y2="53" stroke="#93c5fd" stroke-width="0.5"/>
                
                <!-- Central Modules -->
                <circle cx="45" cy="40" r="3" fill="#fbbf24" stroke="#f59e0b" stroke-width="1"/>
                <circle cx="55" cy="40" r="3" fill="#fbbf24" stroke="#f59e0b" stroke-width="1"/>
                <circle cx="50" cy="60" r="3" fill="#10b981" stroke="#059669" stroke-width="1"/>
                
                <!-- Connection Beams -->
                <line x1="35" y1="50" x2="40" y2="50" stroke="#9ca3af" stroke-width="2.5"/>
                <line x1="60" y1="50" x2="65" y2="50" stroke="#9ca3af" stroke-width="2.5"/>
                
                <!-- Docking Ports -->
                <rect x="48" y="25" width="4" height="8" fill="#ef4444" stroke="#dc2626" stroke-width="1"/>
                <rect x="48" y="67" width="4" height="8" fill="#ef4444" stroke="#dc2626" stroke-width="1"/>
                
                <!-- ISS Text with white background for visibility -->
                <rect x="40" y="80" width="20" height="10" fill="#ffffff" stroke="#374151" stroke-width="0.5" rx="2"/>
                <text x="50" y="87" text-anchor="middle" font-size="6" fill="#374151" font-family="Arial, sans-serif" font-weight="bold">ISS</text>
              </svg>
            </div>
            <style>
              @keyframes issOrbit {
                0% { 
                  transform: scale(1) rotate(0deg);
                  filter: drop-shadow(0 0 8px rgba(0,0,0,0.8)) drop-shadow(0 0 15px rgba(255,255,255,0.6));
                }
                50% {
                  transform: scale(1.05) rotate(2deg);
                  filter: drop-shadow(0 0 12px rgba(0,0,0,0.9)) drop-shadow(0 0 20px rgba(59, 130, 246, 0.7));
                }
                100% { 
                  transform: scale(1.1) rotate(-2deg);
                  filter: drop-shadow(0 0 10px rgba(0,0,0,0.8)) drop-shadow(0 0 18px rgba(16, 185, 129, 0.6));
                }
              }
            </style>
          `,
                    iconSize: [36, 36],
                    iconAnchor: [18, 18]
                  });

                  this.issMarker = L.marker([lat, lon], { icon: issIcon })
                    .addTo(this.map)
                    .bindPopup(`
            <div style="text-align: center; font-family: system-ui; min-width: 180px;">
              <h4 style="color: #1e40af; font-weight: bold; margin: 0 0 6px 0; font-size: 14px;">🛰️ International Space Station</h4>
              <div style="background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; padding: 6px; border-radius: 6px; margin: 6px 0;">
                <p style="margin: 1px 0; font-size: 11px;"><strong>Lat:</strong> ${lat.toFixed(4)}°</p>
                <p style="margin: 1px 0; font-size: 11px;"><strong>Lon:</strong> ${lon.toFixed(4)}°</p>
                <p style="margin: 1px 0; font-size: 11px;"><strong>Alt:</strong> ${alt} km</p>
              </div>
              <p style="margin: 2px 0; font-size: 9px; color: #666;"><strong>Speed:</strong> ~27,600 km/h</p>
              <p style="margin: 2px 0; font-size: 9px; color: #666;"><strong>Period:</strong> ~93 min</p>
            </div>
          `, {
                      closeButton: true,
                      autoClose: false,
                      className: 'custom-popup'
                    });
                }

                // Add to path (limit to prevent memory issues)
                this.issPath.push([lat, lon]);
                if (this.issPath.length > 50) {
                  this.issPath.shift();
                }

                // Update path line with gradient effect
                if (this.pathPolyline) {
                  this.map.removeLayer(this.pathPolyline);
                }

                if (this.issPath.length > 1) {
                  this.pathPolyline = L.polyline(this.issPath, {
                    color: '#fbbf24',
                    weight: 4,
                    opacity: 0.8,
                    dashArray: '10, 5',
                    lineCap: 'round',
                    lineJoin: 'round'
                  }).addTo(this.map);
                }

              } catch (mapError) {
                console.warn('Map update failed:', mapError);
              }
            }

            updateLocationInfo(lat, lon) {
              this.updateRegion(lat, lon);

              const now = new Date();
              const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
              const localTime = new Date(utc);

              document.getElementById('timezone').textContent = 'UTC';
              document.getElementById('localTime').textContent = localTime.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              });
            }

            updateRegion(lat, lon) {
              let region = 'Ocean/Open Sea';

              if (lat > 66.5) {
                region = 'Arctic Ocean';
              } else if (lat < -66.5) {
                region = 'Antarctica';
              } else if (lat > 35 && lon > -10 && lon < 75) {
                region = 'Europe/West Asia';
              } else if (lat > 20 && lon > -125 && lon < -60) {
                region = 'North America';
              } else if (lat < -20 && lon > -85 && lon < -35) {
                region = 'South America';
              } else if (lat > -35 && lat < 37 && lon > -20 && lon < 55) {
                region = 'Africa';
              } else if (lat > -50 && lon > 100 && lon < 180) {
                region = 'Australia/Oceania';
              } else if (lat > 10 && lon > 75 && lon < 140) {
                region = 'East/Southeast Asia';
              } else if (lat > 40 && lon > 75 && lon < 180) {
                region = 'North Asia/Siberia';
              }

              document.getElementById('region').textContent = region;
            }

            startTracking() {
              this.fetchISSPosition();
              this.updateInterval = setInterval(() => {
                this.fetchISSPosition();
                this.countdown = 10;
              }, 10000);
            }

            startCountdown() {
              this.countdown = 10;
              this.countdownInterval = setInterval(() => {
                document.getElementById('nextUpdate').textContent = `${this.countdown}s`;
                this.countdown--;
                if (this.countdown < 0) {
                  this.countdown = 10;
                }
              }, 1000);
            }

            destroy() {
              if (this.updateInterval) {
                clearInterval(this.updateInterval);
              }
              if (this.countdownInterval) {
                clearInterval(this.countdownInterval);
              }
              if (this.map) {
                this.map = null;
              }
            }
          }

          // Initialize ISS Tracker
          function initTracker() {
            if (window.issTracker) {
              window.issTracker.destroy();
            }
            window.issTracker = new ISSTracker();
          }

          // Initialize when DOM is ready
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initTracker);
          } else {
            initTracker();
          }

          // Handle page visibility and resize events
          document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'visible' && window.issTracker && window.issTracker.map) {
              setTimeout(() => {
                if (window.issTracker.map) {
                  window.issTracker.map.invalidateSize();

                  // Reset bounds for better navigation
                  const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement ||
                    document.mozFullScreenElement || document.msFullscreenElement;

                  if (isFullscreen || window.issTracker.map.getZoom() <= 2) {
                    window.issTracker.map.setMaxBounds(null);
                  } else {
                    window.issTracker.map.setMaxBounds([[-90, -180], [90, 180]]);
                  }
                }
              }, 100);
            }
          });

          window.addEventListener('resize', function () {
            if (window.issTracker && window.issTracker.map) {
              setTimeout(() => {
                window.issTracker.map.invalidateSize();

                // Reset bounds for better navigation after resize
                const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement ||
                  document.mozFullScreenElement || document.msFullscreenElement;

                if (isFullscreen || window.issTracker.map.getZoom() <= 2) {
                  window.issTracker.map.setMaxBounds(null);
                } else {
                  window.issTracker.map.setMaxBounds([[-90, -180], [90, 180]]);
                }
              }, 100);
            }
          });

          window.addEventListener('beforeunload', function () {
            if (window.issTracker) {
              window.issTracker.destroy();
            }
          });

// Enhanced experiments with real-time data
        const experiments = [
          {
            title: "MicroGraft — Tissue Engineering",
            module: "Columbus",
            description: "Advanced tissue scaffold growth analysis using stem cells in microgravity environment. Current phase: Cell differentiation monitoring.",
            gradient: "from-blue-500 via-blue-600 to-indigo-600",
            status: "Active",
            progress: 67,
            lastUpdate: "2 min ago",
            dataPoints: 1247
          },
          {
            title: "ZeroDrop — Fluid Dynamics",
            module: "Kibo",
            description: "Investigating capillary fluid behavior in zero gravity for next-gen life support systems. Phase: Surface tension analysis.",
            gradient: "from-cyan-500 via-cyan-600 to-blue-500",
            status: "Recording",
            progress: 89,
            lastUpdate: "5 min ago",
            dataPoints: 2156
          },
          {
            title: "AstroCrystal — Drug Development",
            module: "Destiny",
            description: "Growing pharmaceutical-grade protein crystals for advanced drug therapies. Current: Lysozyme crystallization study.",
            gradient: "from-purple-500 via-purple-600 to-pink-500",
            status: "Critical Phase",
            progress: 45,
            lastUpdate: "1 min ago",
            dataPoints: 892
          },
          {
            title: "Physiological Adaptation Study",
            module: "Zvezda",
            description: "Monitoring astronaut health metrics including bone density, cardiovascular function, and neural adaptation to microgravity.",
            gradient: "from-green-500 via-green-600 to-emerald-500",
            status: "Continuous",
            progress: 78,
            lastUpdate: "Live",
            dataPoints: 3421
          },
          {
            title: "Combustion Physics Research",
            module: "Kibo",
            description: "Advanced flame propagation studies for spacecraft fire safety. Current: Cool flame behavior in oxygen-rich environments.",
            gradient: "from-orange-500 via-red-500 to-red-600",
            status: "Testing",
            progress: 34,
            lastUpdate: "3 min ago",
            dataPoints: 567
          },
          {
            title: "AI-Robotics Integration",
            module: "Columbus",
            description: "Testing autonomous systems for future Mars missions. Phase: Machine learning adaptation to microgravity conditions.",
            gradient: "from-yellow-400 via-amber-500 to-orange-500",
            status: "Learning",
            progress: 92,
            lastUpdate: "30 sec ago",
            dataPoints: 1834
          }
        ];

        // Live update messages
        const liveUpdates = [
          "Protein Crystal Growth Experiment shows 15% improved structure formation...",
          "Fluid Physics Module recording unprecedented capillary action data...",
          "Astronaut physiological monitoring detects positive bone density trends...",
          "AI Systems successfully completed 47 autonomous maneuvers this hour...",
          "Tissue Engineering samples showing 23% faster growth rate than Earth controls...",
          "Combustion experiment reveals new flame behavior patterns in microgravity..."
        ];

        let currentUpdateIndex = 0;

        // Create experiment cards
        const grid = document.getElementById("experimentGrid");

        experiments.forEach((exp, index) => {
          const card = document.createElement("div");
          card.className = `experiment-card stagger-animation rounded-2xl p-6 bg-gradient-to-br ${exp.gradient}`;
          card.style.animationDelay = `${index * 0.1}s`;

          const statusColor = {
            'Active': 'text-green-400',
            'Recording': 'text-blue-400',
            'Critical Phase': 'text-red-400',
            'Continuous': 'text-purple-400',
            'Testing': 'text-yellow-400',
            'Learning': 'text-cyan-400'
          };

          card.innerHTML = `
      <div class="relative z-10">
        <!-- Card Header with Glow Effect -->
        <div class="card-header mb-6">
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-2xl font-black text-white leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
              ${exp.title}
            </h3>
            <div class="flex items-center space-x-2">
              <div class="status-indicator w-3 h-3 rounded-full animate-pulse shadow-lg" 
                   style="background: ${statusColor[exp.status].includes('green') ? 'rgb(34, 197, 94)' :
              statusColor[exp.status].includes('blue') ? 'rgb(59, 130, 246)' :
                statusColor[exp.status].includes('red') ? 'rgb(239, 68, 68)' :
                  statusColor[exp.status].includes('purple') ? 'rgb(147, 51, 234)' :
                    statusColor[exp.status].includes('yellow') ? 'rgb(245, 158, 11)' :
                      'rgb(6, 182, 212)'}; 
                          box-shadow: 0 0 15px ${statusColor[exp.status].includes('green') ? 'rgba(34, 197, 94, 0.6)' :
              statusColor[exp.status].includes('blue') ? 'rgba(59, 130, 246, 0.6)' :
                statusColor[exp.status].includes('red') ? 'rgba(239, 68, 68, 0.6)' :
                  statusColor[exp.status].includes('purple') ? 'rgba(147, 51, 234, 0.6)' :
                    statusColor[exp.status].includes('yellow') ? 'rgba(245, 158, 11, 0.6)' :
                      'rgba(6, 182, 212, 0.6)'};">
              </div>
              <span class="text-xs font-bold ${statusColor[exp.status]} uppercase tracking-wider px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                ${exp.status}
              </span>
            </div>
          </div>
          
          <!-- Enhanced Module Badge -->
          <div class="mb-4">
            <span class="module-badge inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-full text-sm font-bold border-2 border-blue-400/30 shadow-lg">
              <div class="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              ${exp.module} Module
            </span>
          </div>
        </div>
        
        <!-- Enhanced Description -->
        <div class="card-body mb-6">
          <p class="text-white/95 leading-relaxed text-lg font-medium">${exp.description}</p>
        </div>
        
        <!-- Advanced Progress Section -->
        <div class="card-footer space-y-4">
          <div class="flex justify-between items-center text-base">
            <span class="text-blue-200 font-semibold">Mission Progress</span>
            <span class="text-white font-bold text-lg">${exp.progress}%</span>
          </div>
          
          <!-- Enhanced Progress Bar -->
          <div class="progress-container relative">
            <div class="progress-bar h-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full overflow-hidden border border-blue-400/30 shadow-inner">
              <div class="progress-fill h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-full relative shadow-lg" 
                   style="width: ${exp.progress}%">
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
            <div class="progress-glow absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-purple-400/20 rounded-full blur-sm"></div>
          </div>
          
          <!-- Enhanced Stats -->
          <div class="stats-grid grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div class="stat-item text-center">
              <div class="text-2xl font-bold text-cyan-400 mb-1">${exp.dataPoints.toLocaleString()}</div>
              <div class="text-xs text-blue-200 uppercase tracking-wide">Data Points</div>
            </div>
            <div class="stat-item text-center">
              <div class="text-2xl font-bold text-green-400 mb-1">${exp.lastUpdate}</div>
              <div class="text-xs text-blue-200 uppercase tracking-wide">Last Update</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Card Accent Lines -->
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
    `;

          grid.appendChild(card);
        });

        // Enhanced temperature data with module-specific readings
        const moduleTemperatures = {
          columbus: { temp: 21.8, trend: 'stable', color: '#60A5FA' },
          kibo: { temp: 23.1, trend: 'rising', color: '#34D399' },
          destiny: { temp: 22.6, trend: 'stable', color: '#A855F7' },
          zvezda: { temp: 21.5, trend: 'falling', color: '#F87171' }
        };

        // Real-time data simulation
        function updateLiveData() {
          // Update live ticker
          const liveUpdateElement = document.getElementById('liveUpdate');
          liveUpdateElement.textContent = liveUpdates[currentUpdateIndex];
          currentUpdateIndex = (currentUpdateIndex + 1) % liveUpdates.length;

          // Update statistics with random variations
          const activeExp = document.getElementById('activeExperiments');
          const dataStreams = document.getElementById('dataStreams');
          const crewHours = document.getElementById('crewHours');

          activeExp.textContent = Math.floor(Math.random() * 5) + 22;
          dataStreams.textContent = Math.floor(Math.random() * 20) + 150;
          crewHours.textContent = Math.floor(Math.random() * 30) + 300;

          // Update module temperatures with realistic fluctuations
          updateModuleTemperatures();
        }

        // Update individual module temperatures
        function updateModuleTemperatures() {
          const modules = ['columbus', 'kibo', 'destiny', 'zvezda'];

          modules.forEach(module => {
            const tempElement = document.getElementById(`${module}Temp`);
            const currentTemp = moduleTemperatures[module].temp;

            // Add small realistic fluctuations (±0.3°C)
            const fluctuation = (Math.random() - 0.5) * 0.6;
            const newTemp = currentTemp + fluctuation;
            moduleTemperatures[module].temp = Math.round(newTemp * 10) / 10;

            if (tempElement) {
              tempElement.textContent = `${moduleTemperatures[module].temp}°C`;
            }
          });

          // Update overall current temperature (average)
          const avgTemp = modules.reduce((sum, module) => sum + moduleTemperatures[module].temp, 0) / modules.length;
          const currentTempElement = document.getElementById('currentTemp');
          if (currentTempElement) {
            currentTempElement.textContent = `${Math.round(avgTemp * 10) / 10}°C`;
          }
        }

        // Create enhanced progress bars for monitoring section
        function createProgressBars() {
          const progressContainer = document.getElementById('progressBars');
          const activeExperiments = experiments.slice(0, 4);

          activeExperiments.forEach(exp => {
            const progressItem = document.createElement('div');
            progressItem.className = 'progress-experiment-item p-4 bg-gradient-to-r from-slate-800/30 to-slate-700/30 rounded-lg border border-white/10 backdrop-blur-sm';
            progressItem.innerHTML = `
        <div class="flex justify-between items-center mb-3">
          <div class="flex items-center">
            <div class="w-3 h-3 rounded-full mr-3 animate-pulse" 
                 style="background: ${exp.gradient.includes('blue') ? '#60A5FA' :
                exp.gradient.includes('cyan') ? '#22D3EE' :
                  exp.gradient.includes('purple') ? '#A855F7' :
                    exp.gradient.includes('green') ? '#34D399' :
                      exp.gradient.includes('orange') ? '#FB923C' :
                        '#FBBF24'}; 
                        box-shadow: 0 0 10px ${exp.gradient.includes('blue') ? 'rgba(96, 165, 250, 0.5)' :
                exp.gradient.includes('cyan') ? 'rgba(34, 211, 238, 0.5)' :
                  exp.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.5)' :
                    exp.gradient.includes('green') ? 'rgba(52, 211, 153, 0.5)' :
                      exp.gradient.includes('orange') ? 'rgba(251, 146, 60, 0.5)' :
                        'rgba(251, 191, 36, 0.5)'};">
            </div>
            <div>
              <div class="text-white font-semibold text-sm">${exp.title.split('—')[0]}</div>
              <div class="text-gray-400 text-xs">${exp.module} Module</div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-white font-bold text-lg">${exp.progress}%</div>
            <div class="text-xs text-gray-400">${exp.status}</div>
          </div>
        </div>
        <div class="progress-container relative">
          <div class="w-full progress-bar h-2 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full overflow-hidden border border-white/10">
            <div class="progress-fill h-full bg-gradient-to-r ${exp.gradient} rounded-full relative transition-all duration-1000" 
                 style="width: ${exp.progress}%">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      `;
            progressContainer.appendChild(progressItem);
          });
        }

        // Enhanced chart with multiple module data
        function createTemperatureChart() {
          const canvas = document.getElementById('tempChart');
          if (!canvas) return;

          const ctx = canvas.getContext('2d');
          const width = canvas.offsetWidth;
          const height = canvas.offsetHeight;
          canvas.width = width;
          canvas.height = height;

          // Clear canvas
          ctx.clearRect(0, 0, width, height);

          // Generate temperature data for each module
          const dataPoints = 24; // 24 hours
          const modules = [
            { name: 'Columbus', color: '#60A5FA', data: [] },
            { name: 'Kibo', color: '#34D399', data: [] },
            { name: 'Destiny', color: '#A855F7', data: [] },
            { name: 'Zvezda', color: '#F87171', data: [] }
          ];

          // Generate realistic temperature data
          modules.forEach(module => {
            const baseTemp = 20 + Math.random() * 4; // 20-24°C base range
            for (let i = 0; i < dataPoints; i++) {
              const time = i / dataPoints;
              const dailyVariation = Math.sin(time * Math.PI * 2) * 1.5; // Daily cycle
              const noise = (Math.random() - 0.5) * 0.8; // Random noise
              module.data.push(baseTemp + dailyVariation + noise);
            }
          });

          // Find min/max for scaling
          const allTemps = modules.flatMap(m => m.data);
          const minTemp = Math.min(...allTemps) - 1;
          const maxTemp = Math.max(...allTemps) + 1;

          // Draw grid lines
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.lineWidth = 1;
          for (let i = 0; i <= 4; i++) {
            const y = (i / 4) * height;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
          }

          // Draw temperature lines for each module
          modules.forEach(module => {
            ctx.strokeStyle = module.color;
            ctx.lineWidth = 2;
            ctx.beginPath();

            for (let i = 0; i < module.data.length; i++) {
              const x = (i / (module.data.length - 1)) * width;
              const y = height - ((module.data[i] - minTemp) / (maxTemp - minTemp)) * height;

              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }

            ctx.stroke();

            // Add glow effect
            ctx.shadowColor = module.color;
            ctx.shadowBlur = 8;
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Draw data points
            ctx.fillStyle = module.color;
            for (let i = 0; i < module.data.length; i += 4) { // Every 4th point
              const x = (i / (module.data.length - 1)) * width;
              const y = height - ((module.data[i] - minTemp) / (maxTemp - minTemp)) * height;

              ctx.beginPath();
              ctx.arc(x, y, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          });

          // Add temperature labels
          ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.font = '10px monospace';
          ctx.textAlign = 'right';

          for (let i = 0; i <= 4; i++) {
            const temp = minTemp + (maxTemp - minTemp) * (4 - i) / 4;
            const y = (i / 4) * height + 3;
            ctx.fillText(`${Math.round(temp)}°C`, width - 5, y);
          }
        }

        // Initialize everything
        document.addEventListener('DOMContentLoaded', () => {
          createProgressBars();
          createTemperatureChart();

          // Start real-time updates
          setInterval(updateLiveData, 8000);

          // Update chart periodically
          setInterval(createTemperatureChart, 5000);
        });

        // Intersection Observer for animations
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.animationPlayState = 'running';
            }
          });
        }, { threshold: 0.1 });

        document.querySelectorAll('.stagger-animation').forEach(el => {
          observer.observe(el);
        });

// API Configuration
        const API_CONFIG = {
          // Using Spaceflight News API filtered for ISS-related content
          SPACEFLIGHT_NEWS: 'https://api.spaceflightnewsapi.net/v4/articles/?search=ISS&limit=15',
          ISS_POSITION: 'http://api.open-notify.org/iss-now.json',
          ISS_PEOPLE: 'http://api.open-notify.org/astros.json'
        };

        let allUpdates = [];
        let displayedUpdates = 0;
        const updatesPerLoad = 4;
        let isLoading = false;

        // Fallback data for when APIs are unavailable
        const fallbackUpdates = [
          {
            id: 1,
            timestamp: new Date().toISOString(),
            title: "Crew Dragon Expedition 70 Docking Successful",
            description: "SpaceX Crew Dragon Freedom has successfully docked with the ISS Harmony module, bringing four international crew members for a six-month research mission. All systems operating nominally.",
            priority: "critical",
            category: "CREW OPS",
            source: "Mission Control Houston",
            image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=400",
            metrics: {
              "Mission Duration": "6 months",
              "Crew Size": "4 astronauts",
              "Docking Time": "14:32 UTC",
              "Status": "Complete"
            }
          },
          {
            id: 2,
            timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
            title: "Revolutionary Protein Crystallization Results",
            description: "The Advanced Protein Crystal Growth experiment has achieved unprecedented results, producing crystals 45% larger and more structurally perfect than Earth controls, potentially revolutionizing drug development.",
            priority: "critical",
            category: "RESEARCH",
            source: "ISS National Laboratory",
            image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
            metrics: {
              "Size Increase": "+45%",
              "Purity Level": "99.8%",
              "Samples": "72 crystals",
              "Applications": "Drug development"
            }
          }
        ];

        // Fetch real-time ISS data
        async function fetchISSPosition() {
          try {
            const response = await fetch(API_CONFIG.ISS_POSITION);
            const data = await response.json();
            return {
              latitude: parseFloat(data.iss_position.latitude).toFixed(2),
              longitude: parseFloat(data.iss_position.longitude).toFixed(2),
              timestamp: data.timestamp
            };
          } catch (error) {
            console.log('ISS Position API unavailable, using simulated data');
            return null;
          }
        }

        // Fetch crew information
        async function fetchCrewData() {
          try {
            const response = await fetch(API_CONFIG.ISS_PEOPLE);
            const data = await response.json();
            const issCrewCount = data.people.filter(person => person.craft === 'ISS').length;
            return {
              total: data.number,
              iss_crew: issCrewCount,
              crew_names: data.people.filter(person => person.craft === 'ISS').map(person => person.name)
            };
          } catch (error) {
            console.log('Crew data API unavailable, using default data');
            return { total: 7, iss_crew: 7, crew_names: ['Crew data updating...'] };
          }
        }

        // Fetch ISS-related space news from Spaceflight News API
        async function fetchSpaceNews() {
          try {
            const response = await fetch(API_CONFIG.SPACEFLIGHT_NEWS);
            const data = await response.json();

            // Filter results to ensure ISS relevance and add ISS context
            return data.results
              .filter(article =>
                article.title.toLowerCase().includes('iss') ||
                article.title.toLowerCase().includes('international space station') ||
                article.summary?.toLowerCase().includes('iss') ||
                article.summary?.toLowerCase().includes('international space station')
              )
              .map((article, index) => ({
                id: `iss_news_${index}`,
                timestamp: article.published_at,
                title: article.title.includes('ISS') ? article.title : `ISS: ${article.title}`,
                description: article.summary || 'Latest developments related to the International Space Station operations and research.',
                priority: index < 3 ? 'high' : index < 8 ? 'medium' : 'low',
                category: 'ISS NEWS',
                source: `${article.news_site} - ISS Program`,
                image: article.image_url || `https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400`,
                url: article.url,
                metrics: {
                  "ISS Related": "Confirmed",
                  "Published": new Date(article.published_at).toLocaleDateString(),
                  "Source": article.news_site,
                  "ISS Mission": "Ongoing"
                }
              }));
          } catch (error) {
            console.log('ISS news API unavailable, using fallback ISS data');
            return fallbackUpdates;
          }
        }

        // Fetch NASA APOD data
        async function fetchNASAData() {
          try {
            const response = await fetch(API_CONFIG.NASA_API);
            const data = await response.json();

            return data.map((item, index) => ({
              id: `nasa_${index}`,
              timestamp: item.date + 'T00:00:00Z',
              title: `NASA APOD: ${item.title}`,
              description: item.explanation.substring(0, 200) + '...',
              priority: 'medium',
              category: 'NASA APOD',
              source: 'NASA',
              image: item.url.includes('youtube') ? 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400' : item.url,
              url: item.hdurl || item.url,
              metrics: {
                "Date": item.date,
                "Media Type": item.media_type,
                "Copyright": item.copyright || 'NASA',
                "HD Available": item.hdurl ? 'Yes' : 'No'
              }
            }));
          } catch (error) {
            console.log('NASA API unavailable');
            return [];
          }
        }

        // Main function to fetch all data
        async function fetchAllSpaceData() {
          if (isLoading) return;
          isLoading = true;

          // Show loading indicator
          const refreshBtn = document.getElementById('refreshBtn');
          const loadMoreBtn = document.getElementById('loadMoreBtn');

          if (refreshBtn) refreshBtn.textContent = 'Loading...';
          if (loadMoreBtn) loadMoreBtn.textContent = 'Loading Updates...';

          try {
            // Fetch all data simultaneously
            const [spaceNews, issPosition, crewData] = await Promise.all([
              fetchSpaceNews(),
              fetchISSPosition(),
              fetchCrewData()
            ]);

            // Use space news as main updates
            allUpdates = spaceNews.sort((a, b) =>
              new Date(b.timestamp) - new Date(a.timestamp)
            );

            // Update live data if available
            if (issPosition) {
              updateISSPosition(issPosition);
            }

            if (crewData) {
              updateCrewInfo(crewData);
            }

            // Update UI indicators
            updateAPIStatus(true);

          } catch (error) {
            console.error('Error fetching space data:', error);
            allUpdates = fallbackUpdates;
            updateAPIStatus(false);
          } finally {
            isLoading = false;
            if (refreshBtn) refreshBtn.textContent = 'Refresh Feed';
            if (loadMoreBtn) loadMoreBtn.textContent = 'Load More Updates';
          }
        }

        // Update ISS position data
        function updateISSPosition(positionData) {
          // You can add ISS position display here if needed
          console.log('ISS Position updated:', positionData);
        }

        // Update crew information
        function updateCrewInfo(crewData) {
          const crewElement = document.getElementById('crew');
          if (crewElement) {
            crewElement.textContent = crewData.iss_crew;
          }

          // Update crew tooltip or additional info
          const crewNames = crewData.crew_names.join(', ');
          if (crewElement) {
            crewElement.setAttribute('title', `Current crew: ${crewNames}`);
          }
        }

        // Update API connection status
        function updateAPIStatus(isConnected) {
          const statusElements = document.querySelectorAll('[data-api-status]');
          statusElements.forEach(element => {
            if (isConnected) {
              element.classList.remove('text-red-400');
              element.classList.add('text-green-400');
              element.textContent = 'LIVE DATA CONNECTED';
            } else {
              element.classList.remove('text-green-400');
              element.classList.add('text-red-400');
              element.textContent = 'USING CACHED DATA';
            }
          });
        }

        function updateLiveTime() {
          const now = new Date();
          const timeString = now.toISOString().substr(11, 8) + ' UTC';
          document.getElementById('liveTime').textContent = timeString;
        }

        function formatTimestamp(timestamp) {
          const now = new Date();
          const time = new Date(timestamp);
          const diffMs = now - time;
          const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
          const diffDays = Math.floor(diffHours / 24);

          if (diffHours < 1) return 'LIVE';
          if (diffHours < 24) return `${diffHours}H AGO`;
          return `${diffDays}D AGO`;
        }

        function createMissionCard(update, index) {
          const timeAgo = formatTimestamp(update.timestamp);

          return `
      <div class="mission-card priority-${update.priority} rounded-2xl p-6 slide-up" style="animation-delay: ${index * 0.15}s">
        <!-- Header -->
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center space-x-3">
            <div class="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-500/30">
              ${update.category}
            </div>
            <div class="text-xs text-gray-400 font-mono uppercase">${timeAgo}</div>
          </div>
          <div class="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/20">
            <img src="${update.image}" alt="Mission" class="w-full h-full object-cover">
          </div>
        </div>
        
        <!-- Content -->
        <h3 class="text-xl font-bold text-white mb-3 leading-tight">${update.title}</h3>
        <p class="text-gray-300 leading-relaxed mb-6">${update.description}</p>
        
        <!-- Metrics Grid -->
        <div class="data-grid rounded-xl p-4 backdrop-blur-sm mb-4">
          <div class="grid grid-cols-2 gap-4">
            ${Object.entries(update.metrics).map(([key, value]) => `
              <div class="text-center">
                <div class="text-lg font-bold text-cyan-400 mb-1 font-mono">${value}</div>
                <div class="text-xs text-gray-400 uppercase tracking-wide">${key}</div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <!-- Source -->
        <div class="mt-4 pt-4 border-t border-white/10">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-400">Source: ${update.source}</span>
            <div class="text-center">
              <button class="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors" onclick="window.open('${update.url || '#'}', '_blank')">
                ${update.url ? 'Read Full Article →' : 'View Details →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
        }

        function loadMoreUpdates() {
          const grid = document.getElementById('updatesGrid');
          const loadMoreBtn = document.getElementById('loadMoreBtn');

          const nextUpdates = allUpdates.slice(displayedUpdates, displayedUpdates + updatesPerLoad);

          if (nextUpdates.length === 0) {
            loadMoreBtn.textContent = 'No More Updates';
            loadMoreBtn.disabled = true;
            return;
          }

          nextUpdates.forEach((update, index) => {
            const cardHTML = createMissionCard(update, index);
            grid.insertAdjacentHTML('beforeend', cardHTML);
          });

          displayedUpdates += nextUpdates.length;

          if (displayedUpdates >= allUpdates.length) {
            loadMoreBtn.style.display = 'none';
          }
        }

        function clearAndReloadUpdates() {
          const grid = document.getElementById('updatesGrid');
          const loadMoreBtn = document.getElementById('loadMoreBtn');

          // Clear existing updates
          grid.innerHTML = '';
          displayedUpdates = 0;

          // Show load more button again
          loadMoreBtn.style.display = 'block';
          loadMoreBtn.disabled = false;

          // Load fresh updates
          loadMoreUpdates();
        }

        function simulateLiveData() {
          // Simulate slight variations in live data
          const altitude = document.getElementById('altitude');
          const velocity = document.getElementById('velocity');

          if (altitude && velocity) {
            altitude.textContent = (408 + Math.random() * 2 - 1).toFixed(1);
            velocity.textContent = Math.floor(27600 + Math.random() * 100 - 50).toLocaleString();
          }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function () {
          updateLiveTime();

          // Fetch initial data
          fetchAllSpaceData().then(() => {
            loadMoreUpdates();
          });

          // Update time every second
          setInterval(updateLiveTime, 1000);

          // Simulate live data updates
          setInterval(simulateLiveData, 5000);

          // Auto-refresh data every 10 minutes
          setInterval(() => {
            fetchAllSpaceData();
          }, 600000);

          // Load more button
          document.getElementById('loadMoreBtn').addEventListener('click', loadMoreUpdates);

          // Refresh button - fetch new data
          document.getElementById('refreshBtn').addEventListener('click', function () {
            fetchAllSpaceData().then(() => {
              clearAndReloadUpdates();
            });
          });
        });

const galleryItems = document.querySelectorAll('.gallery-item > div');
          const lightbox = document.getElementById('lightbox');
          const lightboxImage = document.getElementById('lightboxImage');
          const lightboxTitle = document.getElementById('lightboxTitle');
          const lightboxDescription = document.getElementById('lightboxDescription');
          const closeLightbox = document.getElementById('closeLightbox');

          galleryItems.forEach(item => {
            item.addEventListener('click', () => {
              const mediaSrc = item.getAttribute('data-media');
              const title = item.getAttribute('data-title');
              const description = item.getAttribute('data-description');

              lightboxImage.src = mediaSrc;
              lightboxImage.alt = title;
              lightboxTitle.textContent = title;
              lightboxDescription.textContent = description;

              lightbox.classList.add('show');
              document.body.style.overflow = 'hidden';
            });
          });

          function closeLightboxModal() {
            lightbox.classList.remove('show');
            document.body.style.overflow = 'auto';
          }

          closeLightbox.addEventListener('click', closeLightboxModal);

          lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
              closeLightboxModal();
            }
          });

          document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
              closeLightboxModal();
            }
          });

// Create animated blinking stars background
          function createStarsBackground() {
            const container = document.getElementById('stars-container');
            const numStars = 150;

            for (let i = 0; i < numStars; i++) {
              const star = document.createElement('div');
              star.className = 'absolute rounded-full bg-white star';

              // Random position
              star.style.left = Math.random() * 100 + '%';
              star.style.top = Math.random() * 100 + '%';

              // Random size (1px to 3px)
              const size = Math.random() * 2 + 1;
              star.style.width = size + 'px';
              star.style.height = size + 'px';

              // Random blinking animation delay and duration
              const delay = Math.random() * 3;
              const duration = Math.random() * 2 + 1;
              star.style.animation = `starBlink ${duration}s ease-in-out ${delay}s infinite`;

              container.appendChild(star);
            }
          }

          // Add CSS for star blinking animation and background effects
          const style = document.createElement('style');
          style.textContent = `
      @keyframes starBlink {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
      
      @keyframes spaceGlow {
        0%, 100% { 
          background: radial-gradient(circle at 20% 30%, rgba(0, 0, 0, 0.8) 0%, rgba(59, 130, 246, 0.1) 30%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(0, 0, 0, 0.9) 0%, rgba(147, 51, 234, 0.1) 30%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(0, 0, 0, 0.95) 0%, rgba(16, 185, 129, 0.05) 30%, transparent 50%);
        }
        33% { 
          background: radial-gradient(circle at 60% 20%, rgba(0, 0, 0, 0.85) 0%, rgba(147, 51, 234, 0.15) 30%, transparent 50%),
                      radial-gradient(circle at 30% 60%, rgba(0, 0, 0, 0.9) 0%, rgba(59, 130, 246, 0.1) 30%, transparent 50%),
                      radial-gradient(circle at 70% 90%, rgba(0, 0, 0, 0.92) 0%, rgba(16, 185, 129, 0.08) 30%, transparent 50%);
        }
        66% { 
          background: radial-gradient(circle at 90% 40%, rgba(0, 0, 0, 0.88) 0%, rgba(16, 185, 129, 0.1) 30%, transparent 50%),
                      radial-gradient(circle at 10% 80%, rgba(0, 0, 0, 0.9) 0%, rgba(147, 51, 234, 0.12) 30%, transparent 50%),
                      radial-gradient(circle at 50% 10%, rgba(0, 0, 0, 0.93) 0%, rgba(59, 130, 246, 0.08) 30%, transparent 50%);
        }
      }
      
      @keyframes nebula {
        0%, 100% { 
          transform: translateX(0) translateY(0) scale(1);
          opacity: 0.2;
        }
        25% { 
          transform: translateX(10px) translateY(-5px) scale(1.05);
          opacity: 0.25;
        }
        50% { 
          transform: translateX(-5px) translateY(10px) scale(0.95);
          opacity: 0.3;
        }
        75% { 
          transform: translateX(-10px) translateY(-8px) scale(1.02);
          opacity: 0.22;
        }
      }
      
      .star {
        box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
      }
      
      #contact::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: black;
        animation: spaceGlow 8s ease-in-out infinite;
        z-index: 1;
      }
      
      #contact::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
          radial-gradient(ellipse at 20% 40%, rgba(0, 0, 0, 0.9) 0%, rgba(99, 102, 241, 0.08) 40%, transparent 60%),
          radial-gradient(ellipse at 80% 60%, rgba(0, 0, 0, 0.92) 0%, rgba(168, 85, 247, 0.06) 40%, transparent 60%),
          radial-gradient(ellipse at 40% 20%, rgba(0, 0, 0, 0.95) 0%, rgba(34, 197, 94, 0.04) 40%, transparent 60%);
        animation: nebula 12s ease-in-out infinite;
        z-index: 1;
      }
    `;
          document.head.appendChild(style);

          // Initialize stars when page loads
          createStarsBackground();
          // Enhanced form handling with professional features
          document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const msgElement = document.getElementById('contactMsg');
            const submitButton = e.target.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;

            // Show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            submitButton.classList.add('opacity-50');

            msgElement.textContent = 'Processing your inquiry...';
            msgElement.className = 'text-sm text-blue-400 flex-1';

            // Simulate form processing
            setTimeout(() => {
              msgElement.textContent = 'Thank you for your inquiry. Our team will respond within 24 hours.';
              msgElement.className = 'text-sm text-green-400 flex-1';

              // Reset button
              submitButton.disabled = false;
              submitButton.textContent = originalText;
              submitButton.classList.remove('opacity-50');

              // Reset form after success message
              setTimeout(() => {
                this.reset();
                msgElement.textContent = '';
              }, 3000);
            }, 2000);
          });

// Mobile menu toggle
    const mobileBtn = document.getElementById('mobileBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    // Smooth internal navigation for single-page experience
    document.querySelectorAll('[data-link]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const href = a.getAttribute('href');
        if (href && href.startsWith('#')) {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          mobileMenu.classList.add('hidden');
        }
      });
    });

    // Reveal on scroll
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));

    // Module cards interaction
    document.querySelectorAll('.module-card').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.dataset.module;
        const title = document.getElementById('moduleTitle');
        const desc = document.getElementById('moduleDesc');
        title.textContent = name;
        if (name === 'Zarya') desc.textContent = 'Zarya (Functional Cargo Block) provided early propulsion, guidance and storage. Launched: 1998.';
        if (name === 'Harmony') desc.textContent = 'Harmony connects laboratories and provides power and data routing for US and international modules.';
        if (name === 'Columbus') desc.textContent = 'Columbus is the European laboratory module for experiments in microgravity.';
        document.getElementById('moduleDetail').classList.remove('hidden');
      });
    });

    // Diagram hotspots
    document.querySelectorAll('[data-part]').forEach(btn => {
      btn.addEventListener('click', () => {
        const part = btn.dataset.part;
        const info = document.getElementById('diagramInfo');
        if (part === 'truss') info.textContent = 'Integrated Truss Structure: houses the solar arrays, radiators and provides structural support.';
        if (part === 'lab') info.textContent = 'Laboratory Modules: pressurized modules where scientific experiments are conducted.';
      });
    });

    // Gallery / lightbox
    const modalRoot = document.getElementById('modalRoot');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.getElementById('closeModal');
    function openModal(html) {
      modalContent.innerHTML = html;
      modalRoot.classList.remove('hidden');
      modalRoot.classList.add('flex');
    }
    function hideModal() {
      modalRoot.classList.add('hidden');
      modalRoot.classList.remove('flex');
      modalContent.innerHTML = '';
    }
    document.querySelectorAll('.gallery-item, .gallery-thumb').forEach(btn => {
      btn.addEventListener('click', () => {
        const media = btn.dataset.media;
        if (!media) return;
        // if youtube embed
        if (media.includes('youtube') || media.includes('embed')) {
          openModal('<div class="aspect-video"><iframe src="' + media + '" class="w-full h-96" frameborder="0" allowfullscreen></iframe></div>');
        } else {
          openModal('<img src="' + media + '" alt="media" class="w-full h-auto rounded">');
        }
      });
    });
    closeModal.addEventListener('click', hideModal);
    modalRoot.addEventListener('click', (e) => { if (e.target === modalRoot) hideModal(); });

    // Intro video modal
    document.getElementById('introVidBtn').addEventListener('click', () => {
      openModal('<div class="aspect-video"><iframe src="https://www.youtube.com/embed/8k1bZx3-2YQ" class="w-full h-96" frameborder="0" allowfullscreen></iframe></div>');
    });

    // Contact form (demo)
    document.getElementById('contactForm').addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('contactMsg').textContent = 'Thanks — message saved locally (demo).';
      e.target.reset();
    });

    // Download placeholder (create a simple blob PDF placeholder)
    document.getElementById('downloadPDF').addEventListener('click', (e) => {
      e.preventDefault();
      const blob = new Blob(["ISS Fact Sheet - placeholder\n\nThis is a placeholder PDF. Replace with a real PDF file for downloads."], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = 'ISS-fact-sheet.pdf'; a.click(); URL.revokeObjectURL(url);
    });

    // Animated walkthrough steps
    const steps = [
      { title: 'Launch & Early Orbit', desc: 'Rockets deliver modules and crew; early docking and configuration.' },
      { title: 'Assembly in Orbit', desc: 'Robotic arms and astronauts assemble modules one by one.' },
      { title: 'Expansion & Labs', desc: 'Laboratories and solar arrays join the station for full scientific capability.' },
      { title: 'Sustained Operations', desc: 'Resupply, crew rotations, research, and upgrades continue.' }
    ];
    let stepIndex = 0;
    function renderStep() {
      document.getElementById('walk-title').textContent = steps[stepIndex].title;
      document.getElementById('walk-desc').textContent = steps[stepIndex].desc;
    }
    document.getElementById('prevStep').addEventListener('click', () => { stepIndex = (stepIndex - 1 + steps.length) % steps.length; renderStep(); });
    document.getElementById('nextStep').addEventListener('click', () => { stepIndex = (stepIndex + 1) % steps.length; renderStep(); });
    renderStep();

    // Set last updated (example dynamic)
    document.getElementById('lastUpdated').textContent = new Date().getFullYear();

    // Accessibility: keyboard close modal
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { hideModal(); mobileMenu.classList.add('hidden'); } });

    // Small progressive enhancement: initialize reveals with delays
    document.querySelectorAll('.reveal').forEach((el, i) => {
      const delay = el.dataset.delay ? Number(el.dataset.delay) : i * 60;
      setTimeout(() => el.classList.add('visible'), delay);
    });

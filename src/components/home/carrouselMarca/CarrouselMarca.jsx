import React from "react";
import s from "./CarrouselMarca.module.css";
import LogosXcode from '~icons/logos/xcode';
import LogosWordpressIcon from '~icons/logos/wordpress-icon';
import LogosRedux from '~icons/logos/redux';
import LogosReact from '~icons/logos/react';
import LogosSequelize from '~icons/logos/sequelize';
import LogosPostmanIcon from '~icons/logos/postman-icon';
import LogosPostgresql from '~icons/logos/postgresql';
import LogosNodejs from '~icons/logos/nodejs';
import LogosJavascript from '~icons/logos/javascript';
import LogosHtml5 from '~icons/logos/html-5';
import LogosGithubIcon from '~icons/logos/github-icon';
import LogosGit from '~icons/logos/git';
import LogosExpo from '~icons/logos/expo';
import LogosCss3 from '~icons/logos/css-3';
import LogosAndroidVertical from '~icons/logos/android-vertical';
import LogosApple from '~icons/logos/apple';

import vigia from '../../../assets/brands/vigia.png';
import gestya from '../../../assets/brands/gestya.png';
import fulmar from '../../../assets/brands/fulmar.png';
import rutatrol from '../../../assets/brands/rutatrol.png';
import viesa from '../../../assets/brands/viesa.jpg';
import vdo from '../../../assets/brands/vdo.svg';


function CarrouselMarca() {
    const logos = [
        vigia, gestya, fulmar, rutatrol, viesa, vdo
    ];

    const totalBrands = logos.length;
    const animationDuration = `${totalBrands * 3}s`;

    return (
        <section>
            <div
                className={s.slider}
                style={{
                    "--total-brand": totalBrands,
                    "--animation-duration": animationDuration,
                }}
            >
                <ul className={s.brands}>
                    {logos.map((logo, index) => (
                        <li key={index} className={s.brandLogo}>
                            <img src={logo} alt={`Logo ${index}`} />
                        </li>
                    ))}
                    {logos.map((logo, index) => (
                        <li key={`duplicate-${index}`} className={s.brandLogo}>
                            <img src={logo} alt={`Duplicate Logo ${index}`} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default CarrouselMarca;


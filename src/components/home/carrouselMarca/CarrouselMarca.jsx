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

function CarrouselMarca() {
    const logos = [
        <LogosWordpressIcon />, <LogosRedux />, <LogosXcode />, <LogosReact />,
        <LogosSequelize />, <LogosPostmanIcon />, <LogosPostgresql />, <LogosNodejs />,
        <LogosJavascript />, <LogosHtml5 />, <LogosGithubIcon />, <LogosGit />,
        <LogosExpo />, <LogosCss3 />, <LogosAndroidVertical />, <LogosApple />
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
                    {logos.map((Logo, index) => (
                        <li key={index} className={s.brandLogo}>{Logo}</li>
                    ))}
                    {logos.map((Logo, index) => (
                        <li key={`duplicate-${index}`} className={s.brandLogo}>{Logo}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default CarrouselMarca;

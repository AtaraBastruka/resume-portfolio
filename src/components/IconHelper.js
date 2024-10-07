import dynamic from "next/dynamic";
import React from "react";

export default function IconComponent({ name }) {
    const Svg = dynamic(() => import(`../app/icons/${name}.svg`));

    return <Svg />;
}


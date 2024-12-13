"use client";
import React from "react";
import featuresData from "../Features/featuresData";
import SingleFeature from "../Features/SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import Cont from "./Cont";

const Projects = () => {
    return (
        <>
            {/* <!-- ===== Features Start ===== --> */}
            <section id="features" className="py-20 lg:py-25 xl:py-30">
                <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
                    {/* <!-- Section Title Start --> */}
                    <SectionHeader
                        headerInfo={{
                            title: "Projelerimiz",
                            subtitle: "Başarı ile geliştirdiğimiz projelerden bazıları",
                            description: `
                            Başarılı projelerimiz, sektördeki uzmanlığımızın ve müşterilerimize sağladığımız sürekli desteğin bir kanıtıdır. İhtiyaçlarınıza özel çözümler geliştirmek için yanınızdayız.
                            `,
                        }}
                    />
                    {/* <!-- Section Title End --> */}

                    <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
                        {/* <!-- Features item Start --> */}

                        {featuresData.map((feature, key) => (
                            <Cont feature={feature} key={key} />
                        ))}
                        {/* <!-- Features item End --> */}
                    </div>
                </div>
            </section>

            {/* <!-- ===== Features End ===== --> */}
        </>
    );
};

export default Projects;

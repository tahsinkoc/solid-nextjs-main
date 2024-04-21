interface Feature {
    id: string,
    title: string,
    description: string
}

const featuresData: Feature[] = [
    {
        id: '01',
        title: "Çoklu Platform Desteği",
        description: ' Flutter ile geliştirdiğimiz uygulamalar, hem Android hem de iOS platformlarında sorunsuz çalışır. Bu, müşterilerimize daha geniş bir kullanıcı kitlesine erişme ve pazar paylarını artırma fırsatı sunar.'
    },
    {
        id: '02',
        title: 'Performans ve Kullanıcı Deneyimi',
        description: ' Flutter, hızlı ve akıcı bir kullanıcı deneyimi sağlamak için optimize edilmiştir. Bu, müşterilerinizin uygulamanızı daha memnuniyetle kullanmasını sağlar ve marka sadakatini artırır.'
    },
    {
        id: '03',
        title: 'Hızlı Geliştirme Süreci:',
        description: 'Flutter`ın hızlı prototipleme özellikleri, uygulama geliştirme sürecini kısaltır ve zamanla ve maliyetle tasarruf sağlar.Bu da müşterilerinizin hızlı bir şekilde piyasaya sürmelerini sağlar ve rekabet avantajı elde etmelerine yardımcı olur.'
    },
];

export default featuresData;

export interface Homebanner {
  id: number;
  attributes: {
    alt: string;
    url: string;
    img: {
      data: [
        {
          attributes: {
            formats: {
              large: {
                url: string;
              };
            };
          };
        }
      ];
    };
  };
}

export interface Homelive {
  id: number;
  attributes: {
    data: string;
    title: string;
    desc: string;
    btnname: string;
  };
}

export interface Discography {
  id: number;
  attributes: {
    alt: string;
    type: string;
    title: string;
    url: string;
    img: {
      data: [
        {
          attributes: {
            formats: {
              large: {
                url: string;
              };
            };
          };
        }
      ];
    };
  };
}

export interface Liveinfo {
  id: number;
  attributes: {
    alt: string;
    date: string;
    title: string;
    time: string;
    price: string;
    linkname: string;
    link: any;
    img: {
      data: [
        {
          attributes: {
            formats: {
              large: {
                url: string;
              };
            };
          };
        }
      ];
    };
  };
}

export interface Contact {
  id: number;
  attributes: {
    name: string;
    email: string;
    subject: string;
    content: string;
  };
}

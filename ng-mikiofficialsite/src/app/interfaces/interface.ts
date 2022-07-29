export interface Homebanner {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    SiteURL: string;
    img: {
      data: [
        {
          attributes: {
            alternativeText: string;
            url: string;
          };
        }
      ];
    };
  };
}

export interface Homebanners {
  data: Homebanner[];
}

export interface Homelive {
  id: number;
  attributes: {
    data: string;
    title: string;
    desc: string;
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
            alternativeText: string;
            url: string;
          };
        }
      ];
    };
  };
}

export interface Discographys {
  data:Discography[]
}

export interface Liveinfo {
  id: number;
  attributes: {
    alt: string;
    date: string;
    title: string;
    time: string;
    price: string;
    link: string;
    img: {
      data: [
        {
          attributes: {
            url: string;
            alternativeText: string;
          };
        }
      ];
    };
  };
}

export interface Liveinfos {
  data: Liveinfo[];
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

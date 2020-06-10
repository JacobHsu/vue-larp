export interface Base {
    lunboList?: any[];
    hotFictionList?: any[];
    freeFictionList?: any[];
    newFictionList?: any[];
    qingFictionList?: any[];
    searchList?: any[];
    navBar?: NavBar;
    searchKW?: string;
}

export interface NavBar {
    showTitle: boolean;
    showLeftTitle: boolean;
    leftTitle: string;
}


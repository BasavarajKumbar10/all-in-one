export interface INavigation {
    navigate: (name, params) => void;
    goBack: () => void;
    previous: boolean;
}

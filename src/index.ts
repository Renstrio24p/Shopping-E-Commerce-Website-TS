import Start from "./start";
import './sass/index.scss';
import UniqueHash from "./security/hashes";

const DOM = document.querySelector<HTMLDivElement>('#app');
DOM!.id = UniqueHash();
Start(DOM!);
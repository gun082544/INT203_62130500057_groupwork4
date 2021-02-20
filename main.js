const app = {
    data() {
        return {
            pictures: [
                { path: './images/1.jpeg', description: 'test1', showFav: false, showModal: false},
                { path: './images/2.jpeg', description: 'test2', showFav: false, showModal: false },
                { path: './images/3.jpeg', description: 'test3', showFav: false, showModal: false }
            ],
            path: "./images/1.jpeg",
            showSearchBoxVar: false,
            searchText: ''
        }
    },
    methods: {
        showFavIcon(index) {
            this.pictures[index].showFav = !this.pictures[index].showFav;
        },
        showSearchBox() {
            this.showSearchBoxVar = !this.showSearchBoxVar;
            this.searchText='';
        },
        toggleModal(index){
            this.pictures[index].showModal = !this.pictures[index].showModal;
          }
    },
    computed: {
        countTotal() {
            return this.pictures.length;
        },
        countShow() {
            return this.pictures.filter(s => s.showFav).length;
        },
        search(){
            return this.pictures.filter(searchShow => {return searchShow.description.toLowerCase().includes(this.searchText.toLowerCase())});
        }
    }
};
Vue.createApp(app).mount('#app');
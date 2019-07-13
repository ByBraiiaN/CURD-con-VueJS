const app = new Vue({

    el: '#app',
    data: {
        titulo: 'CRUD con VueJS',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea(){
            if(this.nuevaTarea != ''){
                this.tareas.push({
                    nombre: this.nuevaTarea,
                    estado: false
                });
                this.nuevaTarea = '';
                this.actualizarLS();
            }            
        },
        editarTarea(index){
            this.tareas[index].estado = true;
            this.actualizarLS();
        },
        eliminarTarea(index){
            //Quita del array la cantidad de elementos que le indiquemos desde el indice
            this.tareas.splice(index, 1);
            this.actualizarLS();
        },
        actualizarLS(){
            localStorage.setItem('crud-vue', JSON.stringify(this.tareas));
        }
    },
    created(){
        let datosLS = JSON.parse(localStorage.getItem('crud-vue'));

        if(datosLS === null)
            this.tareas = [];
        else
            this.tareas = datosLS;       
    }

});
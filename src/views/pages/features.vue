<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary mt-5 me-2" @click="show">
            showAlert
        </button>
        <button type="button" class="btn btn-primary mt-5 me-2" @click="() => $showBsModal('modal-simple')">
            Launch demo modal simple
        </button>
        <button type="button" class="btn btn-primary mt-5 me-2" @click="() => $showBsModal('modal-agent')">
            Launch demo modal agent
        </button>
        <button class="btn btn-success mt-5 me-2" type="button" @click="() => $showBsDrawer('drawer1')">
            Button with data-bs-target
        </button>
        <button class="btn btn-success mt-5" type="button" @click="() => $showBsDrawer('drawer2')">
            Button with data-bs-target2
        </button>

        <bs-offcanvas mode="light" name="drawer1" placement="end" title="My Drawer">
            <template #content>
                <div>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                    images, lists, etc.
                </div>
                <div class="dropdown mt-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </template>
        </bs-offcanvas>

        <bs-offcanvas mode="dark" name="drawer2" scrollable="true" o-class="rounded-top" placement="bottom"
            title="Bottom drawer">
            <template #content>
                <div>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                    images, lists, etc.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora aliquid odio, blanditiis
                    odit minus eos cumque inventore assumenda cupiditate itaque, quae nemo beatae ad asperiores nobis
                    mollitia. Repudiandae, rerum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex expedita in fugiat, alias tempora
                    laudantium corporis ipsa deserunt delectus rerum exercitationem autem eveniet possimus neque,
                    aliquam tenetur ducimus velit consequatur.
                </div>
                <div class="dropdown mt-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </template>
        </bs-offcanvas>


        <bs-modal name="modal-simple" title="Modal Simple" scrollable="true" modal-size="modal-fullscreen">
            <template #modal-body>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, suscipit, asperiores illo non
                    ratione nobis est consequuntur mollitia beatae itaque blanditiis deserunt sapiente tempora? Sed,
                    quam dolores. Neque, adipisci a! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                    asperiores voluptas quae libero eveniet nobis beatae, deleniti quia delectus aspernatur qui at
                    labore magni? Accusantium dolore delectus natus dolorem incidunt. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Esse veritatis nam similique voluptatibus voluptates eos laudantium
                    dolorem corporis est, architecto magnam corrupti omnis non odio aspernatur incidunt possimus rerum
                    et?</p>
            </template>
            <template #modal-footer>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </template>
        </bs-modal>
        <bs-modal name="modal-agent" centered="true" modal-size="modal-lg" scrollable="true" title="Modal agent">
            <template #modal-body>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, suscipit, asperiores illo non
                    ratione nobis est consequuntur mollitia beatae itaque blanditiis deserunt sapiente tempora? Sed,
                    quam dolores. Neque, adipisci a! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic illo,
                    magnam laborum cum ad, quo dolorum cupiditate at expedita reiciendis dignissimos natus eveniet eum
                    repellendus facilis eius mollitia quae nobis! Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Odit praesentium tempora, delectus recusandae voluptates cum minima quae inventore eligendi
                    iure nam repudiandae esse eaque facere minus quibusdam quidem tenetur corrupti. Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. A distinctio totam, dolore minima iure dolores vero
                    accusantium ab. Modi dolorem laboriosam est tempora porro sapiente expedita nihil rerum odit eos.
                </p>
            </template>
            <template #modal-footer>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </template>
        </bs-modal>
    </div>
</template>
<script>
export default {
    name: 'Features',
}
</script>



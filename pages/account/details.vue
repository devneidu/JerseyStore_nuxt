<template>
    <div class="row m-0">
        <div class="col-12">
            <h2 class="mb-5 b-7">MY ACCOUNT</h2>
            <div class="row">
                <div class="col-lg-5 mx-auto bg-gray-100 p-4">
                    <form>
                        <div class="form-group">
                            <label for="first_name">First Name</label>
                            <p v-if="!isEditing" class="b-7">Loremipsut.</p>
                            <input v-else type="text" class="form-control br-0" value="Chine">
                        </div>
                        <div class="form-group">
                            <label for="last_name">Last Name</label>
                            <p v-if="!isEditing" class="b-7">Lorem.</p>
                            <input v-else type="text" class="form-control br-0">
                        </div>
                        <div class="form-group">
                            <label for="address">Address</label>
                            <p v-if="!isEditing" class="b-7">Lorem ipsum dolor sit.</p>
                            <input v-else type="text" class="form-control br-0">
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <p v-if="!isEditing" class="b-7">092802393</p>
                            <input v-else type="text" class="form-control br-0">
                        </div>
                        <span v-show="!isEditing" @click="startEditing" class="btn br-0 btn-primary float-left">Edit</span>
                        <span v-show="isEditing" @click="cancelEdiiting"  class="btn br-0 bg-gray-500 ml-3 float-right">Cancel</span>
                        <button v-show="isEditing" class="btn br-0 btn-success float-right">Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isEditing: false
        }
    },
    methods: {
        startEditing() {
            this.isEditing = true
        },
        cancelEdiiting() {
            this.isEditing = false
        }
    }
}
</script>

<style scoped>
input:focus{
    box-shadow: none
}
</style>

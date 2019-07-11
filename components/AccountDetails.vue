<template>
    <div class="col-lg-4">
        <div class="card bg-gay-100">
            <div class="card-header b-7">
                Your Information
            </div>
            <div class="card-body">
                <h6 class="mb-0 b-6">Name</h6>
                <span class="text-muted">{{user.name}}</span>
                <h6 class="mt-3 mb-0 b-6">Address</h6>
                <span class="text-muted">{{user.address}}</span>
                <h6 class="mt-3 mb-0 b-6">Email</h6>
                <span class="text-muted">{{user.email}}</span>
                <h6 class="mt-3 mb-0 b-6">Phone Number</h6>
                <span class="text-muted">{{user.phone}}</span>
            </div>
            
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

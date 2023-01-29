<template>
    <div class="details">
        <slot name="header"></slot>
        <div class="product-info">
            <slot name="picture"></slot>
            <slot name="body"></slot>
        </div>
    </div>
</template>

<!-- <style scoped>
.details {
    min-height: 200px;
    max-width: 50%;
    border: 1px solid black;
    border-radius: 1rem;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
}

.body {
    width: 100%;
    background-color: blanchedalmond;
    padding: 2px;
    text-align: end;
    border-radius: 1rem;
}
</style> -->
<template>
	<div class="container mx-auto">
		<div class="flex justify-center items-center h-screen">
			<div class="bg-white p-8 rounded shadow-md">
				<h2 class="text-2xl font-bold mb-4">
					Register
				</h2>
				<form>
					<div class="mb-4">
						<label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nama</label>
						<input
							id="name" type="text" class="shadow
appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Masukkan
nama"
						>
					</div>
					<div class="mb-4" />
					<div class="flex items-center justify-between">
						<button
							class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
rounded focus:outline-none focus:shadow-outline" type="submit"
						>
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

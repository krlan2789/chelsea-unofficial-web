<template>
	<div class="navbar h-18">
		<div class="drawer drawer-end bg-base-100 fixed top-0 left-0 z-50">
			<input id="my-drawer" type="checkbox" class="drawer-toggle" />
			<div
				class="drawer-content shadow-[0_2px_0_0] shadow-primary/10 flex flex-row justify-center mx-auto w-full max-w-7xl">
				<!-- Main content -->
				<div class="grow flex">
					<a href="/"
						class="flex flex-row items-center gap-2 align-middle text-primary w-auto px-2 text-xl sm:text-2xl font-semibold tracking-[.025em] h-18"
						translate="no">
						<img src="https://img.chelseafc.com/image/upload/f_auto,c_pad,w_230,h_230,ar_1,q_auto:best/Site%20Chelsea%20Badges/Main_Website_Badge_-_Colour.png"
							alt="Chelsea Logo" class="w-auto h-14 sm:h-16" />
						#KTBFFH
					</a>
				</div>
				<div class="w-auto h-18">
					<div class="hidden md:flex w-lg h-full m-0 p-0">
						<ul class="menu menu-horizontal justify-between w-full m-0 p-0">
							<li class="flex flex-row grow justify-center items-center">
								<a href="/news" class="btn btn-primary btn-square w-full text-xl py-6 px-10 h-18"> News
								</a>
							</li>
							<li class="flex flex-row grow justify-center items-center">
								<a href="/competition"
									class="btn btn-primary btn-square w-full text-xl py-6 px-10 h-18"> Competition </a>
							</li>
							<li class="flex flex-row grow justify-center items-center group">
								<div class="dropdown dropdown-hover dropdown-bottom dropdown-end w-full h-auto m-0 p-0">
									<div tabindex="0" role="button"
										class="btn btn-primary btn-square w-full text-xl group-hover:border-t-2 group-hover:border-t-primary-content py-6 px-10 h-18">
										About</div>
									<ul tabindex="0" style="margin: 0; padding: 0"
										class="dropdown-content menu z-1 w-lg shadow-md">
										<li class="w-auto min-w-max">
											<a href="/about"
												class="btn btn-primary btn-square w-full text-lg py-4 px-6 h-16"> The
												Club </a>
										</li>
										<li class="w-auto min-w-max">
											<a href="/team-squad"
												class="btn btn-primary btn-square w-full text-lg py-4 px-6 h-16"> Team
												Squad </a>
										</li>
										<li class="w-auto min-w-max">
											<a href="/trophy-cabinet"
												class="btn btn-primary btn-square w-full text-lg py-4 px-6 h-16"> Trophy
												Cabinet </a>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
					<div class="block h-full md:hidden">
						<label for="my-drawer" class="drawer-button size-18 btn btn-primary">
							<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 14 14">
								<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
									d="M13.5 2H6m5 5H3.5m5 5h-8" />
							</svg>
						</label>
					</div>
				</div>
			</div>

			<div class="drawer-side p-0 h-screen w-screen z-100 md:hidden">
				<!-- <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label> -->
				<!-- ✨ Close Button -->
				<label for="my-drawer" class="btn btn-square btn-error absolute top-0 size-18 right-0 z-110">
					<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
						<!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
						<path fill="currentColor"
							d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
					</svg>
				</label>

				<!-- Drawer Content -->
				<ul
					class="menu m-0 p-0 pt-18 w-full h-full bg-primary text-primary-content border-0 relative flex flex-col text-lg">
					<li class="flex flex-row w-full">
						<a href="/news" class="w-full chelsea-link-primary text-2xl">News</a>
					</li>
					<li class="flex flex-row w-full">
						<a href="/competition" class="w-full chelsea-link-primary text-2xl">Competition</a>
					</li>
					<li class="flex flex-row min-w-full" style="margin: 0; padding: 0">
						<div class="bg-primary collapse collapse-arrow flex flex-col min-w-full gap-0"
							style="margin: 0; padding: 0">
							<input id="mobile-menu-about" hidden type="checkbox" class="peer min-w-full" />
							<label for="mobile-menu-about"
								class="collapse-title transition-colors text-center justify-center from-primary to-primary text-2xl min-w-full chelsea-link-primary px-2 py-4 peer-checked:bg-secondary peer-checked:text-secondary-content">
								About
							</label>
							<div class="collapse-content w-full transition-all h-0 scale-y-0 duration-300 ease-in-out origin-top peer-checked:transition-all peer-checked:h-auto peer-checked:scale-y-100 peer-checked:bg-secondary peer-checked:text-secondary-content"
								style="margin: 0; padding: 0">
								<ul class="flex flex-col" style="margin: 0; padding: 0">
									<li class="flex flex-row w-full">
										<a href="/about" class="w-full chelsea-link-primary text-xl py-7"> The Club </a>
									</li>
									<li class="flex flex-row w-full">
										<a href="/team-squad" class="w-full chelsea-link-primary text-xl py-7"> Team
											Squad </a>
									</li>
									<li class="flex flex-row w-full">
										<a href="/trophy-cabinet" class="w-full chelsea-link-primary text-xl py-7">
											Trophy Cabinet </a>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

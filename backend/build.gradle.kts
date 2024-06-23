import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
import org.springframework.boot.gradle.tasks.bundling.BootJar

plugins {
	id("org.springframework.boot") version "3.3.0"
	id("io.spring.dependency-management") version "1.1.5"
	kotlin("jvm") version "1.9.24"
	kotlin("plugin.spring") version "1.9.24"
}

group = "com.unicamp"
version = "0.0.1-SNAPSHOT"

java {
	toolchain {
		languageVersion = JavaLanguageVersion.of(17)
	}
}

repositories {
	mavenCentral()
}

subprojects {
	apply(plugin = "org.jetbrains.kotlin.jvm")
	apply(plugin = "io.spring.dependency-management")
	apply(plugin = "kotlin")
	apply(plugin = "java")
	apply(plugin = "idea")
	apply(plugin = "org.springframework.boot")

	configurations {
		all {
			val jar: Jar by tasks
			val bootJar: BootJar by tasks

			bootJar.enabled = false
			jar.enabled = true

			defaultTasks("clean", "build")
			exclude(group = "commons-logging", module = "commons-logging")
			exclude(group = "org.springframework.boot", module = "spring-boot-starter-logging")
		}
	}

	dependencies {
		implementation(kotlin("stdlib-jdk8"))
		implementation(kotlin("reflect"))

		implementation("org.springframework.boot:spring-boot-starter")
		implementation("org.jetbrains.kotlin:kotlin-reflect")
		testImplementation("org.springframework.boot:spring-boot-starter-test")
		testImplementation("org.jetbrains.kotlin:kotlin-test-junit5")
		testRuntimeOnly("org.junit.platform:junit-platform-launcher")
	}

	sourceSets {
		main {
			resources {
				srcDir("src/main/resources")
			}
		}
	}

	tasks.withType<Copy> {
		duplicatesStrategy = DuplicatesStrategy.INCLUDE
	}

	tasks.withType<KotlinCompile> {
		kotlinOptions {
			freeCompilerArgs = listOf("-Xjsr305=strict")
			jvmTarget = "17"
		}
	}

	tasks.withType<Test> {
		useJUnitPlatform()
	}
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = java.sourceCompatibility.toString()
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}

tasks.getByName<BootJar>("bootJar") {
	enabled = false
}
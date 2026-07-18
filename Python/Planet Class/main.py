class Planet:
    def __init__(self, name, planet_type, star):
        if not isinstance(name, str):
            raise TypeError("name, planet type, and star must be strings")
        if not isinstance(planet_type, str):
            raise TypeError("name, planet type, and star must be strings")
        if not isinstance(star, str):
            raise TypeError("name, planet type, and star must be strings")

        if name == "":
            raise ValueError("name, planet_type, and star must be non-empty strings")
        if planet_type == "":
            raise ValueError("name, planet_type, and star must be non-empty strings")
        if star == "":
            raise ValueError("name, planet_type, and star must be non-empty strings")

        self.name = name
        self.planet_type = planet_type
        self.star = star

    def __str__(self):
        return f"Planet: {self.name} | Type: {self.planet_type} | Star: {self.star}"

    def orbit(self):
        return f"{self.name} is orbiting around {self.star}..."


planet_1 = Planet("Mercury", "Inner planet", "Sun")
planet_2 = Planet("Saturn", "Outer planet", "Sun")
planet_3 = Planet("M62H b", "Pulsar planet", "M62H")

print(planet_1)
print(planet_2)
print(planet_3)

print(planet_1.orbit())
print(planet_2.orbit())
print(planet_3.orbit())

test_settings = {
    "theme": "light",
    "setting2": "value2",
    "setting3": "value3",
    "setting4": "value4",
}


def add_setting(settings, pair):
    key, value = pair
    lower_key = key.lower()
    lower_value = value.lower()

    if lower_key in settings:
        return f"Setting '{lower_key}' already exists! Cannot add a new setting with this name."
    else:
        settings[lower_key] = lower_value
        return f"Setting '{lower_key}' added with value '{lower_value}' successfully!"


def update_setting(settings, pair):
    key, value = pair
    lower_key = key.lower()
    lower_value = value.lower()

    if lower_key in settings:
        settings[lower_key] = lower_value
        return f"Setting '{lower_key}' updated to '{lower_value}' successfully!"
    else:
        return f"Setting '{lower_key}' does not exist! Cannot update a non-existing setting."


def delete_setting(settings, key):
    lower_key = key.lower()

    if lower_key in settings:
        del settings[lower_key]
        return f"Setting '{lower_key}' deleted successfully!"
    else:
        return "Setting not found!"


def view_settings(setting):
    if not setting:
        return "No settings available."
    else:
        result = "Current User Settings:\n"
        for key, value in setting.items():
            formatted_key = key.capitalize()
            result += f"{formatted_key}: {value}\n"
        return result


print(add_setting({"theme": "light"}, ("THEME", "dark")))

update_setting({"theme": "light"}, ("theme", "dark"))
update_setting({"theme": "light"}, ("volume", "high"))

delete_setting({"theme": "light"}, "theme")

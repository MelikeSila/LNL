var data_views   = { group:[], single:[], bindings:{}};

data_views.group.push({"model":{"name":null,"value":null,"status":null},"child":"#list1","parent":".uib_w_1"});

data_views.group.push({"model":{"name":null,"value":null,"status":null},"child":"#list2","parent":".uib_w_5"});
























data_views.single.push({"selector":".uib_w_32","options":{"effect":["html","attributes"]}});




data_views.group.push({"model":{"_id":null,"_name":null,"_description":null,"_path._id":null,"_path._path_string":null,"_path._center_of_latitude":null,"_path._center_of_longitude":null,"_scene_type._id":null,"_scene_type._name":null,"_scene_type._description":null,"_map_image":null,"_parentSceneId":null},"child":".uib_w_56","parent":".uib_w_55"});














data_views.group.push({"model":{"_id":null,"_name":null,"_description":null,"_path._id":null,"_path._path_string":null,"_path._center_of_latitude":null,"_path._center_of_longitude":null,"_parentSceneId":null,"_scene_type._name":null,"_scene_type._id":null,"_scene_type._description":null,"_childs[]._id":null,"_childs[]._name":null,"_childs[]._description":null,"_childs[]._path._id":null,"_childs[]._path._path_string":null,"_childs[]._path._center_of_latitude":null,"_childs[]._path._center_of_longitude":null,"_childs[]._scene_type._id":null,"_childs[]._scene_type._name":null,"_childs[]._scene_type._description":null,"_childs[]._map_image":null,"_childs[]._parentSceneId":null,"_map_image":null},"child":".uib_w_54","parent":".uib_w_53"});





data_views.single.push({"selector":".uib_w_46","options":{"effect":["html","attributes"]}});
data_views.group.push({"model":{"[]._id":null,"[]._name":null,"[]._description":null,"[]._map_item._id":null,"[]._map_item._x":null,"[]._map_item._y":null,"[]._map_item._data":null,"[]._device._id":null,"[]._device._default_name":null,"[]._device._default_description":null,"[]._device._serial_no":null,"[]._device._is_virtual":null,"[]._device._device_model._id":null,"[]._device._device_model._model_number":null,"[]._device._device_model._description":null,"[]._device._device_model._name":null,"[]._device._latitude":null,"[]._device._longitude":null,"[]._device._isParentDevice":null,"[]._is_virtual":null,"[]._sms_feedback":null,"[]._email_feedback":null},"child":".uib_w_63","parent":".uib_w_71"});
data_views.single.push({"selector":".uib_w_74","options":{"effect":["html","attributes"]}});
/* prepare controllers */

data_support.prepare_mvc("#list1", "intel.xdk.services.LNLVirtual1", ["virtualChannels"], "standard-list", data_views);

data_support.prepare_mvc("#list2", "intel.xdk.services.LNLVirtual1", ["virtualChannels"], "standard-list", data_views);




data_support.prepare_mvc(".uib_w_32", "uib_w_27_data", [], "null", data_views);

data_support.prepare_mvc(".uib_w_56", "uib_w_54_data", ["_childs"], "standard-list", data_views);

data_support.prepare_mvc(".uib_w_54", "intel.xdk.services.LNLScenes", [], "standard-list", data_views);

data_support.prepare_mvc(".uib_w_46", "uib_w_56_data", [], "null", data_views);
data_support.prepare_mvc(".uib_w_63", "intel.xdk.services.LNLonscenedevices", [], "standard-list", data_views);
data_support.prepare_mvc(".uib_w_74", "intel.xdk.services.LNLsceneDevice", [], "null", data_views);

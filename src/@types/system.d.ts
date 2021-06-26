namespace rdb {

	namespace row {

		interface SystemWithoutID {
			name: string;
			submitted_by: string;

			is_generic: boolean;
			unusual_accessories: boolean;
			conflict: rdb.generic.Conflict;

			c_advancement: rdb.generic.Advancement;
			c_creation: rdb.generic.Creation;
			c_equipment: rdb.generic.Equipment;
			c_levels: rdb.generic.Levels;
			c_sheet: rdb.generic.BasicValues;

			r_combat: rdb.generic.BasicValues;
			r_construction: rdb.generic.BasicValues;
			r_crafting: rdb.generic.BasicValues;
			r_downtime: rdb.generic.BasicValues;
			r_faction: rdb.generic.BasicValues;
			r_social: rdb.generic.BasicValues;
			r_travel: rdb.generic.BasicValues;
			r_warfare: rdb.generic.BasicValues;
		}

		interface System extends SystemWithoutID {
			id: number;
		}

	}

}

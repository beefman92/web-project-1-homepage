package com.my.webdev.project.homepage.repo;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.File;
import java.util.HashSet;
import java.util.Set;

@Component
public class IdRepository {
    private ObjectMapper mapper = new ObjectMapper();
    private final String filePath = "id.json";
    private Set<String> ids = new HashSet<>();

    @PostConstruct
    public void initialize() {
        File file = new File(filePath);
        if (file.exists()) {
            try {
                ids = (Set<String>)mapper.readValue(file, Set.class);
            } catch (Exception e) {
                throw new RuntimeException("Start server failed. ", e);
            }
        } else {
            ids = new HashSet<>();
        }
    }

    synchronized public void saveNewId(String newId) {
        ids.add(newId);
        File file = new File(filePath);
        if (file.exists()) {
            file.delete();
        }
        try {
            mapper.writeValue(file, ids);
        } catch (Exception e) {
            throw new RuntimeException("Saving new id failed. ", e);
        }
    }

    synchronized public boolean idExists(String id) {
        return ids.contains(id);
    }
}
